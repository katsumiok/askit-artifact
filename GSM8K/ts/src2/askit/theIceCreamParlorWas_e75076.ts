// Recompilation count: 0
export function theIceCreamParlorWas_e75076({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // The price per scoop of ice cream
  const pricePerScoop = 1.5;
  // The total money Erin has
  const totalMoney = 6;

  // Find out how many total scoops of ice cream Erin gets for every 'x1' she buys
  const totalScoopsPerBuy = x1 + x2;
  // Find out the total cost for the 'x1' scoops she has to buy
  const totalCostPerBuy = x1 * pricePerScoop;

  // Find out how many times Erin can buy 'x1' scoops with her total money to make use of the offer
  const numberOfBuys = Math.floor(totalMoney / totalCostPerBuy);

  // Return the total number of scoops she should buy, which is the number of buys times the total scoops she gets per buy
  return numberOfBuys * totalScoopsPerBuy;
}
