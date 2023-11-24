// Recompilation count: 0
export function candyHasX1LightBlue_55d12e({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    const totalSpools: number = x1 + x2 + x3 + x4;
    const blueSpools: number = x1 + x2;
    const percentBlue: number = (blueSpools / totalSpools) * 100;

    return percentBlue;
}
