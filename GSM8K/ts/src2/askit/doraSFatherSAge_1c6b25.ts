// Recompilation count: 0
export function doraSFatherSAge_1c6b25({ x1 }: {
    x1: number;
}): number {
    // Dora's father's age is eight more than twice Dora's age. 
    let fatherAge = 2 * x1 + 8;
    // If Dora's mother is four years younger than Dora's father
    let motherAge = fatherAge - 4;
    // calculate the total combined age of Dora, her father, and her mother.
    return x1 + fatherAge + motherAge;
}
