// Recompilation count: 0
export function thereAreCurrentlyX1Red_5caed1({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // cost per ball
    const redBallCost = 9;
    const blueBallCost = 5;
    const greenBallCost = 3;

    // calculate total sales
    const totalSales = (x1 * redBallCost) + (x2 * blueBallCost) + (x3 * greenBallCost);

    return totalSales;
}
