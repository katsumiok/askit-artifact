// Recompilation count: 0
export function carlSFavoriteFoodIs_218172({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Carl ate a sandwich every day this week for lunch, which is 7 days
  let sandwichesCheese = x1 * 7;
  
  // He ate cheese and egg omelets for breakfast 'x2' days in the week using one more slice per omelet than he did per sandwich.
  let omelettesCheese = (x1 + 1) * x2;
  
  // He made a big dish of macaroni and cheese to last him several dinners for the week and used 'x3' slices of cheese in it
  let macaroniCheese = x3;
  
  // total amount of cheese Carl used
  let totalCheese = sandwichesCheese + omelettesCheese + macaroniCheese;
  return totalCheese;
} 
