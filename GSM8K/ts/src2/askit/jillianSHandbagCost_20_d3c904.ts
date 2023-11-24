// Recompilation count: 0
export function jillianSHandbagCost_20_d3c904({ x1 }: {
    x1: number;
}): number {
    // Jillian's handbag cost $20 less than 'x1' times as much as her shoes cost. If her shoes cost $80, how much did her bag cost?
    const shoesCost = 80; // her shoes cost $80
    const handbagCost = x1 * shoesCost - 20; // handbag cost $20 less than 'x1' times as much as her shoes cost
    return handbagCost;
}
