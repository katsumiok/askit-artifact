// Recompilation count: 0
export function brianSFriendBobbyHas_f7700d({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Bobby has 'x1' fewer than 'x2' times as many video games as Brian does
    // Brian has 'x3' video games but lost 'x4' right before the comparison was made
    // So first we calculate the total number of video games Brian has after he lost 'x4',
    // then we calculate how many Bobby has by multiplying Brian's total by 'x2' 
    // and subtracting 'x1'
    const brianTotal = x3 - x4;
    const bobbyTotal = (brianTotal * x2) - x1;
    
    // If Bobby's total is negative, we return 0 because he can't have negative number of video games
    return bobbyTotal >= 0 ? bobbyTotal : 0;
}
