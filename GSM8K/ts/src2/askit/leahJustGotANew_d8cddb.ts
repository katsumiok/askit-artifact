// Recompilation count: 0
export function leahJustGotANew_d8cddb({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Leah just got a new kitten. Spaying her cost $200, her 'x1' vaccines costs $20 each, and the kitten broke 'x2' vases that cost $12 each. How much has the kitten cost so far?
    
    let costOfSpaying = 200;
    let totalVaccineCost = x1 * 20;
    let totalVaseCost = x2 * 12;

    return costOfSpaying + totalVaccineCost + totalVaseCost;
}
