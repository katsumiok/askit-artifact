// Recompilation count: 0
export function thePriceOfParmesanCheese_cfd342({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
   // The price of Parmesan cheese is $11 per pound. Mozzarella cheese is $6 per pound.  
   // Amor buys 'x1' pounds of Parmesan and 'x2' pounds of mozzarella cheese.  
   // If she starts with $50 cash, how much money, in dollars, will she have left to buy meat?
   const parmesanCost = x1 * 11; // Calculate total cost of Parmesan cheese
   const mozzarellaCost = x2 * 6;  // Calculate total cost of Mozzarella cheese
   const totalCost = parmesanCost + mozzarellaCost; // Calculate total cost for both types of cheese

   const moneyLeft = 50 - totalCost; // Calculate how much money will be left

   return moneyLeft; // return the remaining money to buy meat
}
