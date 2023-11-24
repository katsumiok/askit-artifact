// Recompilation count: 0
export function marilynSFirstRecordSold_879bc0({ x1 }: { x1: number; }): number {
    // Marilyn's first record sold 'x1' times as many copies as Harald's. If they sold 88,000 copies combined, how many copies did Harald sell?
    let totalCopies = 88000;
    let haraldsCopies = totalCopies / (x1 + 1);
    return haraldsCopies;
}
