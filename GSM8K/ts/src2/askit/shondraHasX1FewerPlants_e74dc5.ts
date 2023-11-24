// Recompilation count: 0
export function shondraHasX1FewerPlants_e74dc5({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Shondra has 'x1' fewer plants than Toni. Toni has 60% more plants than Frederick. If Frederick has 'x2' plants, how many plants does Shondra have?

    // First, calculate how many plants Toni has. Since Toni has 60% more plants than Frederick, we multiply x2 by 1.6 (100% + 60% = 160%)
    let toniPlants = x2 * 1.6;

    // Then, since Shondra has x1 fewer plants than Toni, we subtract x1 from the number of plants Toni has.
    let shondraPlants = toniPlants - x1;

    // Return the number of plants Shondra has.
    return shondraPlants;
}
