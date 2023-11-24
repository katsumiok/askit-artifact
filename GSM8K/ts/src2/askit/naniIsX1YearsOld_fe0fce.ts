// Recompilation count: 0
export function naniIsX1YearsOld_fe0fce({ x1 }: {
    x1: number;
}): number {
    // Nani is 'x1' years old. His brother is twice his age. Nani's sister is 25% younger than him. What is the total age of all three of the family members?
    let brotherAge = x1 * 2;
    let sisterAge =  x1 - (x1 * 0.25);
    return x1 + brotherAge + sisterAge;
}
