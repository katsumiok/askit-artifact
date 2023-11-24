// Recompilation count: 0
export function jonSCarNeedsA_86804f({ x1, x2, x3 }: { x1: number; x2: number; x3: number; }): number {
  // Jon's car needs a tune-up every 'x1' miles.  He drives 'x2'
  // miles a day for a 'x3' day month.  How many tune-ups does he need in that time?
  const totalMilesDriven = x2 * x3;
  return Math.floor(totalMilesDriven / x1);
};
