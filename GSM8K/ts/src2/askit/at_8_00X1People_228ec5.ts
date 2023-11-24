// Recompilation count: 0
export function at_8_00X1People_228ec5({ x1 }: { x1: number; }): number {
    // At 8:00, 'x1' people lined up at a polling station to cast their vote on election day. 
    // By midday 2/5 of the people had voted 
    let votedByMidday = x1 * (2 / 5);
    let remainingAfterMidday = x1 - votedByMidday;
    
    // and by 16:00 2/3 of the remaining people had voted. 
    let votedBy16 = remainingAfterMidday * (2 / 3);
    let remainingAfter16 = remainingAfterMidday - votedBy16;
    
    // What's the number of those who had not voted by 16:00?
    return remainingAfter16;
}
