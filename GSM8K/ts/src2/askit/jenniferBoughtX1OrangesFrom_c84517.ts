// Recompilation count: 0
export function jenniferBoughtX1OrangesFrom_c84517({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Jennifer bought 'x1' oranges from the market, she gave her three daughters 'x2' oranges each, and her only boy got 'x3' oranges. How many oranges did she remain with?
    return x1 - (3 * x2) - x3;
}
