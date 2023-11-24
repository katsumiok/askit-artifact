// Recompilation count: 0
export function ellaEarned_33ForX1_8cc8b6({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Ella earned $33 for 'x1' hours of dog walking. If she continues to walk dogs at the same rate, how much would she earn after 'x2' hours?
    let rate = 33 / x1; // find out how much she earns in one hour
    return rate * x2; // multiply that by 'x2' hours to find out how much she would earn
}
