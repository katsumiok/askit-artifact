// Recompilation count: 0
export function colbyWantsToBuySome_7ec9d7({ x1, x2, x3, x4 }: {
    x1: number; //quarters
    x2: number; //dimes
    x3: number; //nickels
    x4: number; //pennies
}): number {       
    let totalCents:number = x1 * 25 + x2 * 10 + x3 * 5 + x4;
    let gumballs:number = Math.floor(totalCents / 5);
    return gumballs;
}
