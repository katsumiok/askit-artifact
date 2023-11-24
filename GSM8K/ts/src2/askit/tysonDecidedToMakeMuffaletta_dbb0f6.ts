// Recompilation count: 0
export function tysonDecidedToMakeMuffaletta_dbb0f6({ x1, x2, x4 }: {
    x1: number;
    x2: number;
    x4: number;
}): number {
    // calculate number of sandwiches Tyson needs to make
    let sandwichCount = x4 / x2;

    // calculate total pounds of meat and cheese
    let totalPounds = sandwichCount * x1;

    // calculate total cost
    let totalCost = totalPounds * 10; 
    
    return totalCost;
}
