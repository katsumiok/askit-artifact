// Recompilation count: 0
export function francesSellsX1CupcakesFor_6287db({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
   // Frances sells 'x1' cupcakes for $2 for each cupcake and 'x2' cookies at $1 each.  
   // She buys five trays at $4 for each tray. How much money does Frances have left?
   
    const revenueFromCupcakes = x1 * 2;
    const revenueFromCookies = x2 * 1;
    const costOfTrays = 5 * 4;

    const totalRevenue = revenueFromCupcakes + revenueFromCookies;

    const remainingMoney = totalRevenue - costOfTrays;

    return remainingMoney;
}
