// Recompilation count: 0
export function aTraderBuysSomeBags_235985({}: {}): number {
  // setting up the prices per bag
  const buyingPrice: number = 20;
  const transportationCost: number = 2;
  const sellingPrice: number = 30;

  // calculating total profit from each bag
  const profitFromEachBag: number = sellingPrice - buyingPrice - transportationCost;

  // total profit made
  const totalProfit: number = 400;

  // calculating total bags sold using total profit and profit from each bag
  const totalBagsSold: number = totalProfit / profitFromEachBag;

  return totalBagsSold;
}
