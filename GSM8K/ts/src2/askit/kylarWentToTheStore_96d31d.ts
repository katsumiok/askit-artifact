// Recompilation count: 0
export function kylarWentToTheStore_96d31d({ x1 }: {
    x1: number;
}): number {
    let total: number = 0;
    for(let i = 1; i <= x1; i++) {
        if(i % 2 == 0) {
            total += 5 * 0.6; // Every second glass cost only 60% of the price
        } else {
            total += 5; // One glass costs $5
        }
    }
    return total;
}
