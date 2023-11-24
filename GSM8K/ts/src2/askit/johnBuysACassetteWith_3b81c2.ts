// Recompilation count: 1
export function johnBuysACassetteWith_3b81c2({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // John buys a cassette with 'x1' songs.  The first song is 'x2' minutes and the second song is 60% longer.  How much time was the total cassette?
    const secondSongTime = x2 * 1.6;
    const remainingSongs = x1 - 2; // Subtract the first two songs
    const remainingTime = remainingSongs * x2; // Assume the rest of the songs are of length 'x2'
    const totalTime = x2 + secondSongTime + remainingTime;
    return totalTime;
}
