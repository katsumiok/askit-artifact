// Recompilation count: 0
export function aPlaneTravelsX1Miles_90da0b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A plane travels 'x1' miles in 'x2' hours. At the same rate, how many additional hours would it take to travel an additional 'x3' miles?
    const rate = x1 / x2;  // miles/hour
    return x3 / rate;  // hours
}
