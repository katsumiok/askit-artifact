// Recompilation count: 0
export function topherTheGreenGiantWears_d45d4d({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Topher, the green giant, wears enormous shoes.  The length of one of his shoes is 'x1' inches longer than 'x2' times the length of one of Bobby’s shoes.  If the length of one of Topher’s shoes is 8-feet and 4-inches, how long, in inches, is one of Bobby’s shoes?

        // Converting Topher's shoe size into inches, 1 foot = 12 inches
        const topherShoeSizeInches = 8 * 12 + 4; // 8 feet and 4 inches = 100 inches

        // We know that Topher's shoe size is 'b' times Bobby's plus 'a', therefore:
        // topherShoeSizeInches = x2 * BobbyShoeSizeInches + x1
        // Solving the equation for BobbyShoeSizeInches gives:
        const bobbyShoeSizeInches = (topherShoeSizeInches - x1) / x2;

        return bobbyShoeSizeInches;
}
