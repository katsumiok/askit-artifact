// Recompilation count: 0
export function pamelaReappliesAnOunceOf_8760f5({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Pamela reapplies an ounce of sunscreen every hour she's outside.  Her sunscreen comes in 8-ounce bottles.  While on vacation, if she will be outside 'x1' hours a day over 'x2' days, how many bottles of sunscreen will she need to pack?
    
    // Total needed sunscreen in ounces
    const totalOunces = x1 * x2;

    // Each bottle contains 8 ounces, so we divide the total needed ounces by 8 and round up (since she can't buy a fraction of a bottle)
    const totalBottles = Math.ceil(totalOunces / 8);

    return totalBottles;
}
