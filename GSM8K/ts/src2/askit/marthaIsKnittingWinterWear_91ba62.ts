// Recompilation count: 0
export function marthaIsKnittingWinterWear_91ba62({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // Calculate the total skeins of wool needed per grandchild
    const totalPerChild = x2 + x3 + x4 + x5 + x6;  // total for hat, scarf, sweater, mittens, and socks
    // Multiply the total skeins needed per child by the number of grandchildren
    return totalPerChild * x1;  // total wool needed for 'x1' grandchildren
}
