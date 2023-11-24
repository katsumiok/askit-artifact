// Recompilation count: 0
export function everyMonthMadelineHasTo_3122f1({ x1 }: {
    x1: number;
}): number {
  // Every month, Madeline has to buy food, treats, and medicine for her dog. 
  // Food costs $25 per week. Treats cost $20 per month. Medicine costs $100 per month. 
  // How much money does Madeline spend on her dog per year if there are 'x1' weeks in a month?

  // calculate cost per month 
  const perMonthFoodCost = 25 * x1;
  const perMonthTreatCost = 20;
  const perMonthMedicineCost = 100;

  const totalMonthlyCost = perMonthFoodCost + perMonthTreatCost + perMonthMedicineCost;

  // Now, calculate annual spending by multiplying by the number of months in a year, which is 12.
  return totalMonthlyCost * 12;
}
