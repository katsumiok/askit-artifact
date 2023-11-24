// Recompilation count: 0
export function maxPlansToWatchTwo_b72342({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Convert the hours to minutes and add with the given minutes for each movie
    const movie1Time = x1 * 60 + x2;
    const movie2Time = x3 * 60 + x4;

    // Return the total time for two movies
    return movie1Time + movie2Time;
}
