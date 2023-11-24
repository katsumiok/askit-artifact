// Recompilation count: 0
export function emilyCanPeelX1Shrimp_cbca96({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Emily can peel 'x1' shrimp a minute and saute 'x2' shrimp in 'x3' minutes. 
    // How long will it take her to peel and cook 'x4' shrimp?
    const peelingTime = x4 / x1;
    const cookingTime = (x4 / x2) * x3;
    return peelingTime + cookingTime;
}
