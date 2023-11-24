// Recompilation count: 0
export function miguelUsesX1PadsOf_afdcea({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Miguel uses 'x1' pads of paper a week for his drawing. If there are 'x2' sheets of paper on a pad of paper, how many sheets of paper does he use every month?
    const papersPerWeek = x1 * x2;
    const weeksPerMonth = 4; // Assuming 4 weeks in a month
    return papersPerWeek * weeksPerMonth; 
}
