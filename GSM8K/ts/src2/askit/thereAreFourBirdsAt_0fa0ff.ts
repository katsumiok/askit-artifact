// Recompilation count: 0
export function thereAreFourBirdsAt_0fa0ff({ x1 }: {
    x1: number;
}): number {
    // Sally Thirtytwo is 'x1' years old
    let sallyThirtyTwo = x1;

    // Sally Four is the same age as Sally Thirtytwo 
    let sallyFour = sallyThirtyTwo;

    // Granny Red is two times as old as Sally Four
    let grannyRed = 2 * sallyFour;

    // Sally Two is three years older than Granny Red
    let sallyTwo = grannyRed + 3;

    // Total age of the four birds
    let totalAge = sallyTwo + grannyRed + sallyFour + sallyThirtyTwo;

    return totalAge;
}
