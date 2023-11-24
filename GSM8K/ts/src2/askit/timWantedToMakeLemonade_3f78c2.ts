// Recompilation count: 0
export function timWantedToMakeLemonade_3f78c2({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // calculate the total cups of lemon juice needed for the x4 gallons
    const totalCupsForParty = x1 * x4;

    // calculate the cups of lemon juice needed for Allen's gallon, which is twice as tart
    const totalCupsForAllen = 2 * x1;

    // Total cups needed
    const totalCups = totalCupsForParty + totalCupsForAllen;

    // calculate how many lemons are needed per cup
    const lemonsPerCup = x2 / x3;

    // total lemons needed
    const totalLemons = totalCups * lemonsPerCup;

    return totalLemons;
}
