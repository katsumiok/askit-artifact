// Recompilation count: 0
export function movieAWasOneFourth_5f9cd4({ x1 }: {
    x1: number;
}): number {
    // Movie C was 1.25 hours (75 minutes)
    const movieC = 1.25 * 60;

    // Movie B was 'x1' minutes longer than Movie C
    const movieB = movieC + x1;

    // Movie A was one-fourth the length of Movie B
    const movieA = movieB / 4;

    return movieA;
}
