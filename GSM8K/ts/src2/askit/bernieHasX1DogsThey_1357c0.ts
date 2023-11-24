// Recompilation count: 0
export function bernieHasX1DogsThey_1357c0({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Bernie has 'x1' dogs. They each need a certain amount of exercise per day. The first needs to walk 'x2' mile. The second needs to walk 'x3' miles. The third needs to walk 'x4' miles. On average, they need to walk 'x5' miles per day. How many miles does the last dog need?
    return x1 * x5 - x2 - x3 - x4;
}
