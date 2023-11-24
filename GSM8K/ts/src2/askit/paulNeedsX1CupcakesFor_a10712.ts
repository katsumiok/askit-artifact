// Recompilation count: 0
export function paulNeedsX1CupcakesFor_a10712({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Paul needs 'x1' cupcakes for a birthday party happening on Saturday. He already has 'x2' chocolate cupcakes and 'x3' toffee cupcakes. How many more cupcakes should Paul buy?
  
  let totalCupcakes = x2 + x3;
  let numberOfCupcakesToBuy = x1 - totalCupcakes;
  return numberOfCupcakesToBuy > 0 ? numberOfCupcakesToBuy : 0;
}
