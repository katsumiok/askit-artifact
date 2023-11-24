// Recompilation count: 0
export function jamesDecidesToPickSome_092139({ x1 }: {
    x1: number;
}): number {
    // James decides to pick some blueberries.  It cost $20 to go picking and then another $1.5 per pound.  He picked 'x1' pounds of blueberries.  How much did he save compared to buying at the store for $2.5 a pound?
    const pickingCost = 20 + x1 * 1.5;
    const storeCost = x1 * 2.5;
    return storeCost - pickingCost;
}
