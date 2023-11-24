// Recompilation count: 0
export function jeffAndBradAreTrying_8dee20({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Jeff and Brad are trying to divide 'x1' dollars between them. Jeff gets 'x2' times as much as Brad. How much does Jeff get in dollars?
    var totalPortions = x2 + 1;
    var portionValue = x1 / totalPortions;
    var JeffsPortion = portionValue * x2;
    return JeffsPortion;
}
