// Recompilation count: 0
export function thereAreX1GirlsIn_167757({ x1 }: {
    x1: number;
}): number {
    // There are 'x1' girls in the park. If there are twice the number of boys in the park, how many kids are in the park?

    // Number of boys is twice the number of girls
    let boyCount = 2 * x1;
    // Total number of kids in the park is the sum of girls and boys
    let totalKids = x1 + boyCount;
    
    //return total number of kids.
    return totalKids;
}
