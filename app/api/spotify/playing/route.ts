import { NextResponse, NextRequest } from "next/server";
import { SongResponse } from "@/services/spotify/SongResponse";
import { SpotifyService } from "@/services/spotify/SpotifyService";
export async function GET(request: NextRequest): Promise<NextResponse> {
  const spotifyService = new SpotifyService();
  const { access_token } = await spotifyService.getAccessToken();
  const response = await spotifyService.getCurrentlyPlaying(access_token);
  return response;
}
