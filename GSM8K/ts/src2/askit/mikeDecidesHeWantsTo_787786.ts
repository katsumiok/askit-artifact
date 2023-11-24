// Recompilation count: 0
export function mikeDecidesHeWantsTo_787786({ x1 }: { x1: number }) {
    const normalMovieCost = 10;
    const seriesMovieCost = normalMovieCost * 0.6;
    const olderMovieCost = 5;
    const seriesMovies = Math.floor(x1 / 3);
    const remainingMovies = x1 - seriesMovies;
    const olderMovies = Math.floor(remainingMovies * 0.4);
    const newMovies = remainingMovies - olderMovies;

    const cost = (seriesMovies * seriesMovieCost) + (olderMovies * olderMovieCost) + (newMovies * normalMovieCost);

    return cost;
}
