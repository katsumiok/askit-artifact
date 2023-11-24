// Recompilation count: 0
export function aFarmerHasX1Eggs_ee8556({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
     // A farmer has 'x1' eggs. He placed them on a tray, which holds 'x2' eggs each. How much will the farmer earn if he sells it for $2.5 per tray?
     let numOfTrays = Math.floor(x1 / x2);
     let earnings = numOfTrays * 2.5;
     return earnings;
}
