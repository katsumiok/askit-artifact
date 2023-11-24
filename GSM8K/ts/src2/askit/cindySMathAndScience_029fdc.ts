// Recompilation count: 0
export function cindySMathAndScience_029fdc({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Cindy's math and science books weigh 'x1' pounds each.  
  // Her French book weighs 'x2' pounds and her English book weighs 'x3' pounds.  
  // Her history book weighs twice as much as her English book.  
  // If Cindy carries all of her books at once, what will be the total weight of the books she is carrying?

  // The total weight will be 2*x1 (for the math and science books) + x2 (for the French book)
  // + x3 (for the English book) + 2*x3 (for the history book which weighs twice as the English book)

  return 2*x1 + x2 + x3 + 2*x3;
}
