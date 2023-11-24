// Recompilation count: 0
export function theThreeAnglesInA_79021b({ x1 }: {
    x1: number;
}): number {
    // The three angles in a triangle add up to 'x1' degrees. 
    // One angle is twice the smallest angle, and one angle is three times the smallest angle. 

    // Let's assume the smallest angle is 'a'. Then one angle is '2a' and one angle is '3a'. 
    // Since all these angles add upt to 'x1' degrees, we can say: a + 2a + 3a = x1, hence 6a = x1

    // Calculate 'a'
    const a = x1 / 6;

    // The largest angle is three times 'a'
    return 3 * a;
}
