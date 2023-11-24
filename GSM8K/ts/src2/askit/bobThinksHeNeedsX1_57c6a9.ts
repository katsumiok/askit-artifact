// Recompilation count: 0
export function bobThinksHeNeedsX1_57c6a9({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // Bob will need to buy 'x1' popsicle sticks to recreate the Washington Monument.
  // Each box of his favorite popsicles (which come 'x2' to a box) cost $2.00. 
  // Therefore, by dividing 'x1' by 'x2' we get the number of boxes Bob needs and 
  // we multiply it by 2 to get the total cost
  return Math.ceil(x1 / x2) * 2;
} 
