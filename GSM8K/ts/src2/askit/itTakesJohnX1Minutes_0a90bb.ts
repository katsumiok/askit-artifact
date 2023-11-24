// Recompilation count: 0
export function itTakesJohnX1Minutes_0a90bb({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculate the time for the second and third sides
    let timeFor2ndAnd3rdSides = 2 * x1 * 2;
    // Calculate the time for last 'x2' sides
    let timeForLastSides = x2 * (x1 / 2);
    // If 'x3' is reached before 'x2', you already have all the sides
    let totalTime = x3 <= x2 ? x1 + timeFor2ndAnd3rdSides : x1 + timeFor2ndAnd3rdSides + timeForLastSides;
    return totalTime;
}
