// Recompilation count: 1
export function sethIsTwiceAsOld_089704({ x1 }: {
    x1: number;
}): number {
    // Seth is twice as old as Brooke. In 'x1' years, the sum of their ages will be 28. How old is Seth?

    // Let's denote Brooke's age as 'b', and Seth's age as 's'. 
    // From the problem description, we know two facts:
    // 1. Seth's current age is twice Brooke's current age (s = 2b).
    // 2. In x1 years, the sum of their ages will be 28 ((b + x1) + (s + x1) = 28).

    // From the first fact we substitute 's' in the second equation by '2b': (b + x1) + (2b + x1) = 28.
    // This simplifies to: 3b + 2x1 = 28.
    // And finally, to find Seth's current age, we transform the equation to: b = (28 - 2x1) / 3.
    // We then multiply Brooke's age by 2, as Seth is twice as old as Brooke: s = 2 * ((28 - 2x1) / 3).

    let brookeAge = (28 - 2 * x1) / 3;
    let sethAge = 2 * brookeAge;
    return sethAge;
}
