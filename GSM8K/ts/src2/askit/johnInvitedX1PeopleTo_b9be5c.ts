// Recompilation count: 0
export function johnInvitedX1PeopleTo_b9be5c({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    
    const totalHotDogsNeeded = x1 * x2;
    const additionalHotDogsNeeded = totalHotDogsNeeded - x3 > 0 ? totalHotDogsNeeded - x3 : 0;
    const packsOfHotDogsNeeded = Math.ceil(additionalHotDogsNeeded / x4);
    
    return packsOfHotDogsNeeded * 2; // each pack costs $2
}
