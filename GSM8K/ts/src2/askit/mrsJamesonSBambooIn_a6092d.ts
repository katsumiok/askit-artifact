// Recompilation count: 0
export function mrsJamesonSBambooIn_a6092d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Mrs. Jameson's bamboo in the backyard grows up to 'x1' inches a day. Today, its height is 'x2' feet. In how many days will its height be 'x3' inches?
    // Convert the height in feet to inches
    const currentHeightInInches = x2 * 12;
    // Calculate the difference in height in inches
    const heightDifferenceInInches = x3 - currentHeightInInches;
    // Calculate the number of days it will take to reach the desired height
    const daysNeeded = heightDifferenceInInches / x1;

    // If the calculated number of days is a fraction, we need to round up to the nearest whole number,
    // because a partial day would not be enough for the bamboo to reach its desired height.
    return Math.ceil(daysNeeded);
}
