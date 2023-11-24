// Recompilation count: 1
export function inAFamilyThereAre_547955({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // In a family, there are 'x1' brothers and 'x2' sisters. All sisters are the same age, which is 16. 
    // One of the brothers is 'x3' years old, which is half the age of the older brother. 
    // What is the total age of all these siblings?

    let totalAge = 0;

    // Add the age of all sisters
    totalAge += x2 * 16;

    // Calculate the age of the older brother
    let olderBrotherAge = x3 * 2;

    // Add the age of all brothers (including the older one and x3)
    totalAge += olderBrotherAge + x3 + ((x1 - 2) * olderBrotherAge); // Subtracting 2 from x1 because the older brother and x3 are already accounted for

    return totalAge;
}
