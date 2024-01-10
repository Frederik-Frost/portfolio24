import querystring from "querystring";
import { SongResponse } from "./SongResponse";
import { NextResponse } from "next/server";

export class SpotifyService {
  clientId?: string;
  clientSecret?: string;
  refreshToken?: string;
  baseUrl?: string;
  redirectUri: string;
  scopes?: string;

  constructor() {
    this.clientId = process.env.SPOTIFY_CLIENT_ID;
    this.clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    this.refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
    this.redirectUri = process.env.SPOTIFY_REDIRECT_URI ?? "http://localhost:3000/api/spotify/callback";
    this.baseUrl = "https://api.spotify.com/v1";
    this.scopes = process.env.SPOTIFY_SCOPE;
  }

  async getAccessToken(): Promise<any> {
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
    const basicAuth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64");

    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: this.refreshToken,
      }),
    });

    return response.json();
  }

  async getCurrentlyPlaying(accessToken: string): Promise<NextResponse> {
    const endpoint: string = `${this.baseUrl}/me/player/currently-playing`;
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok || response.status === 204 || response.status > 400) {
      const notPlaying: SongResponse = {
        isPlaying: false,
        title: "Not Playing",
      };
      return NextResponse.json(notPlaying);
    }

    // response ok - check if playing
    const data = await response.json();

    if (data.error || !["episode", "track"].includes(data.currently_playing_type)) {
      const notPlaying: SongResponse = {
        isPlaying: false,
        title: "Not Playing",
      };
      return NextResponse.json(notPlaying);
    }

    if (data.currently_playing_type === "episode") {
      const podcastData: SongResponse = {
        isPlaying: data.is_playing,
        title: "Probably some boring podcast..",
        timestamp: data.timestamp,
      };
      return NextResponse.json(podcastData);
    }

    // All good - playing a song
    const songData: SongResponse = {
      albumImageUrl: data.item.album.images[0].url,
      artist: data.item.artists.map((_artist: any) => _artist.name).join(", "),
      isPlaying: data.is_playing,
      songUrl: data.item.external_urls.spotify,
      title: data.item.name,
      timestamp: data.timestamp,
    };

    return NextResponse.json(songData);
  }

  // Returns a url to redirect to with a code in the query params that can be used to get an access token
  async getOAuthAccessCode(): Promise<string> {
    const res = await fetch(
      `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUri}&scope=${this.scopes}`,
    );
    const url = await res.url;
    return url;
  }

  // When "Code" is obtained from getOAuthAccessCode(), use it to generate a refresh_token (save this in .env file after)
  async authorizeSpotifyWithCode(code: string): Promise<any> {
    const authUrl: string = "https://accounts.spotify.com/api/token";
    const basicAuth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64");

    const response = await fetch(authUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: this.redirectUri,
      }),
    });

    const data = await response.json();
    return data;
  }
}
