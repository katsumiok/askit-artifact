// Recompilation count: 0
export function tommyIsFundraisinForHis_bcc074({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Tommy is fundraising for his charity by selling brownies for $3 a slice and
    // cheesecakes for $4 a slice. If Tommy sells 'x1' brownies and 'x2' slices of cheesecake,
    // how much money does Tommy raise?
    
    const browniePrice = 3;
    const cheesecakePrice = 4;
    
    return x1 * browniePrice + x2 * cheesecakePrice;
}
