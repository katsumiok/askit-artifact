// Recompilation count: 0
export function atASpaIrisSpent_be2a6d({}: {}): number {
    // At a spa, Iris spent $400 to do her hair
    let hairCost : number = 400;

    // 1/4 as much to do a manicure,
    let manicureCost : number = hairCost / 4;

    // and 3/4 as much money as a manicure to do a pedicure.
    let pedicureCost : number = manicureCost * (3 / 4);

    // How much money did she spend at the spa?
    let totalSpent : number = hairCost + manicureCost + pedicureCost;

    return totalSpent;
}
