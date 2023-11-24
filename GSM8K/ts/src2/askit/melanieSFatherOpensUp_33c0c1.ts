// Recompilation count: 0
export function melanieSFatherOpensUp_33c0c1({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Melanie's father opens up an animal farm starting with 'x1' cows and 'x2' chickens. Milkie Cows Limited brings him 'x3' cows per day and Broilers Limited brings him 'x4' chickens per day, for three weeks. What's the total number of animals on the farm after three weeks?

    let numberOfDays = 21; // three weeks
    let totalCows = x1 + x3 * numberOfDays; // initial cows + cows brought per day for three weeks
    let totalChickens = x2 + x4 * numberOfDays; // initial chickens + chickens brought per day for three weeks

    return totalCows + totalChickens;
}
