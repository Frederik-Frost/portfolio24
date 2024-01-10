import { redirect } from 'next/navigation'
import { SpotifyService } from '@/services/spotify/SpotifyService';

export async function GET(request: Request) {
  const spotifyService = new SpotifyService();
  const data = await spotifyService.getOAuthAccessCode();
  return redirect(data);
}
