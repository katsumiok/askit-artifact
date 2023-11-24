// Recompilation count: 0
export function aRegularBoxOfX1_b5545b({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A regular box of 'x1' dishwasher pods costs $12. 
    // There's currently a special size box for the same price 
    // that has 20% more pods (1.2*x1). 
    // If you use 'x2' pod per cycle, how many dishwashing cycles 
    // with the new box can you run for $1?
    
    // To solve this, first we calculate how many pods we get for $1
    // which is (1.2*x1)/12 (since a box costs $12). 
    // Then we divide this by the number of pods used per cycle. 
    
    const podsPerDollar = (1.2 * x1) / 12;
    const cyclesPerDollar = podsPerDollar / x2;
    return cyclesPerDollar;
}
