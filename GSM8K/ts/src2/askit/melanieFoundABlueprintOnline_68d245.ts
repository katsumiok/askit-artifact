// Recompilation count: 0
export function melanieFoundABlueprintOnline_68d245({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
   
    // Calculate total toothpicks Melanie has currently
    let currentTotal = x2 * x3;

    // Calculate remaining toothpicks needed to reach x1, or zero if she already has enough
    let toothpicksNeeded = Math.max(0, x1 - currentTotal);
  
    // To reach x4, She needs
    const totalToothpicksNeeded = x4 - currentTotal;

    // Calculate how many more weeks she will have to save
    const weeksNeeded = Math.ceil(totalToothpicksNeeded / x2);

    // Return the result
    return weeksNeeded;
}
