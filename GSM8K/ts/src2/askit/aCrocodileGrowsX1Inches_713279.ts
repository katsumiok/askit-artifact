// Recompilation count: 0
export function aCrocodileGrowsX1Inches_713279({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A crocodile grows 'x1' inches long in 'x2' years. At this rate, how many inches will it grow in 'x3' years?
    const rateOfGrowthPerYear = x1 / x2;
    const growthInX3Years = rateOfGrowthPerYear * x3;
    return growthInX3Years;
}
