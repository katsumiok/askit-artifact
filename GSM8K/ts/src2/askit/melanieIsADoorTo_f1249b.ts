// Recompilation count: 3
export function melanieIsADoorTo_f1249b({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Melanie is a door-to-door saleswoman. She sold a third of her vacuum cleaners at the green house, 'x1' more to the red house, and half of what was left at the orange house. If Melanie has 'x2' vacuum cleaners left, how many did she start with?

    // Using reverse calculations to find the total vacuum cleaners at start.
    // If she has 'x2' left after selling half at the orange house, she had 2 * x2 before selling at orange house.
    let beforeOrange = 2 * x2;

    // Adding 'x1' vacuum cleaners she sold at red house.
    let beforeRed = beforeOrange + x1;

    // If she sold a third of her vacuum cleaners at the green house and then had 'beforeRed' number of cleaners, she initially had 1.5 times 'beforeRed' vacuum cleaners.
    let start = 1.5 * beforeRed;

    // Round to nearest integer as we assume she can only have whole vacuum cleaners.
    return Math.round(start);
}
