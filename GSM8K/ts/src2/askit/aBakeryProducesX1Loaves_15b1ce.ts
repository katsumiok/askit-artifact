// Recompilation count: 0
export function aBakeryProducesX1Loaves_15b1ce({ x1 }: {
    x1: number;
}): number { 
    // A bakery produces 'x1' loaves of bread each day.
    // Two-thirds of the loaves are sold in the morning
    let morningSold = (2/3) * x1;
    let remainingLoaves = x1 - morningSold;

    // half of what is left is sold equally in the afternoon and evening.
    let afternoonSold = remainingLoaves / 2;

    // Return how many loaves of bread are sold in the afternoon
    return afternoonSold;
}
