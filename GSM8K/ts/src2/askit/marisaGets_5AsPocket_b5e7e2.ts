// Recompilation count: 0
export function marisaGets_5AsPocket_b5e7e2({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Each lollipop costs 'x2' cents hence 'x1' lollipops will cost 'x1*x2' cents
    let totalCostOfLollipopsInCents:number = x1 * x2;
  
    // Convert the total cost of lollipops from cents to dollars as Marisa gets money in dollars
    let totalCostOfLollipopsInDollars:number = totalCostOfLollipopsInCents / 100;
  
    // Money left after buying lollipops each day
    let dailySavings: number = 5 - totalCostOfLollipopsInDollars;

    // Total savings in 'x3' days
    return dailySavings * x3;
}
