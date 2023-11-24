// Recompilation count: 1
export function aaronAndVanessaWereRelay_f55d5b({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Vanessa ran twice as far as Aaron. Which means Aaron ran x1/2 miles.
    // Aaron also run each mile twice as fast as Vanessa. So, if it took x2 minutes for Aaron to run x1/2 miles,
    // then it would take Vanessa 2*x2 minutes to run the same distance (x1/2 miles).
    // Hence, to run x1 miles, it would take Vanessa 2 * x2 * (x1 / (x1/2)) = 4 * x2
    // Therefore, Vanessa took 4 * x2 minutes to complete her part.
    return 4 * x2;
}
