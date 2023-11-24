// Recompilation count: 0
export function tedTheTRexWas_095f35({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    let saladForAdults = x1 * x2;
    let saladForChildren = (x1 / 2) * x3; 

    // Total salad is the sum of salads needed for adults and children
    let totalSalad = saladForAdults + saladForChildren; 

    return totalSalad; // total pounds of potato salad to bring.
}
