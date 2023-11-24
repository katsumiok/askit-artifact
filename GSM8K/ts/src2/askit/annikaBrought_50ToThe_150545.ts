// Recompilation count: 0
export function annikaBrought_50ToThe_150545({}: {}): number {
  // Annika brought $50 to the town fair. 
  // She spent half of it on food and snacks, and an additional $10 for rides. 
  // How much, in dollars, is left?
  const totalMoney = 50;
  const spentOnFoodAndSnacks = totalMoney / 2; // $25
  const spentOnRides = 10;
  
  const moneyLeft = totalMoney - spentOnFoodAndSnacks - spentOnRides; // $50 - $25 - $10

  return moneyLeft; // returns the money left
}
