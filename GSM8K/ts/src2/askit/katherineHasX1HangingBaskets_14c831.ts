// Recompilation count: 0
export function katherineHasX1HangingBaskets_14c831(
    { x1, x2, x3, x4 }: {
        x1: number; // number of baskets
        x2: number; // number of petunias per basket
        x3: number; // number of sweet potato vines per basket
        x4: number; // unnecessary variable, ignored in the function implementation
    }
): number {
    // cost of 1 petunia
    const petuniaCost = 3.00;
    // cost of 1 sweet potato vine
    const potatoVineCost = 2.50;
    // Total cost = number of baskets * ((number of petunias per basket * cost of 1 petunia) + (number of sweet potato vines per basket * cost of 1 sweet potato vine))
    const totalCost = x1 * ((x2 * petuniaCost) + (x3 * potatoVineCost));
    return totalCost;
}
