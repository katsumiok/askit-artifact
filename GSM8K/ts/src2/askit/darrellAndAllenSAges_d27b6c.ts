// Recompilation count: 0
export function darrellAndAllenSAges_d27b6c({ x1 }: {
    x1: number;
}): number {
    // Darrell and Allen's ages are in the ratio of 7:11. If their total age now is 162, calculate Allen's age 'x1' years from now.
    let totalAge = 162;
    let ratioSum = 7 + 11; //Sum of ratio
    let x = totalAge / ratioSum; //Ratio value

    let allensCurrentAge = 11 * x; //Allen's current age

    //Allen's age x1 years from now
    let allensFutureAge = allensCurrentAge + x1;
    
    return allensFutureAge;
}
