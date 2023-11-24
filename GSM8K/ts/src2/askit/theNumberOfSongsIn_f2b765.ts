// Recompilation count: 0
export function theNumberOfSongsIn_f2b765({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // The number of songs in a playlist is 300. If John has 'x1' such playlists, and each song is 'x2' hours long, how many hours will the 'x3' playlists last in total?
    const totalSongs = x1 * 300; // Total songs in all playlists
    const totalTime = totalSongs * x2; // Total time for all songs
    const totalPlaylistTime = x3 * 300 * x2; // Total time for 'x3' playlists
    return totalPlaylistTime;
}
