import { NextResponse } from "next/server";
import { SpotifyService } from "@/services/spotify/SpotifyService";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  // callback route should retrieve the "code" query parameter and use it to request an access token from Spotify

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400, statusText: "No code provided" });
  }
  
  const spotifyService = new SpotifyService();
  const refreshToken = await spotifyService.authorizeSpotifyWithCode(code);
  console.log("REFRESH TOKEN ------ ", refreshToken);
  return NextResponse.json(refreshToken);
}

