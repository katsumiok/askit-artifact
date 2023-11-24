// Recompilation count: 0
export function forEveryMuffinSvetlanaNeeded_54b011({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
   // For every muffin, Svetlana needed 'x1' tablespoons of flour, 'x2' tablespoons of sugar, and 0.25 of a tablespoon of salt. How many tablespoons of dry ingredients would Svetlana need to make 'x3' muffins?

    const flourNeeded = x1 * x3;
    const sugarNeeded = x2 * x3;
    const saltNeeded = 0.25 * x3;
  
    return flourNeeded + sugarNeeded + saltNeeded;
}
