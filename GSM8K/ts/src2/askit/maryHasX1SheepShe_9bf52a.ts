// Recompilation count: 0
export function maryHasX1SheepShe_9bf52a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    let halfSheep = x1 / 2;
    let milkEachDay = (halfSheep * x2) + (halfSheep * x3);
    return milkEachDay;
}
