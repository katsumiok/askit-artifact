// Recompilation count: 0
export function johnBuysMilkForX1_bc5109({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
  // John buys milk for 'x1' dollars, eggs for 'x2' dollars, 
  // light bulbs for 'x3' dollars, cups for 'x4' dollars, and roach traps for 'x5' dollars.  
  // If there is a 10% tax on all nonfood items how much did everything cost.
  let foodItems = x1 + x2; // cost of milk and eggs
  let nonFoodItems = x3 + x4 + x5; // cost of light bulbs, cups, and roach traps
  
  let taxOnNonFoodItems = 0.1 * nonFoodItems; // calculating 10% tax on nonfood items
  
  let totalCost = foodItems + nonFoodItems + taxOnNonFoodItems; // total cost including tax
  
  return totalCost;
}
