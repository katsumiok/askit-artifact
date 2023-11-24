// Recompilation count: 0
export function charlieHasThreeTimesAs_bc11a0({ x1 }: {
    x1: number;
}): number {
    // According to question, Charlie has 'x1' friends who are three times more than Dorothy's friends.
    // So, Dorothy's friends would be 'x1 / 3'
    // And, James has four times as many friends as Dorothy, so he would be having '4 * (x1 / 3)' friends
    // we return this value
    
    return 4 * (x1 / 3);
}
