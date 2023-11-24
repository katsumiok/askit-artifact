// Recompilation count: 0
export function sallyBuysOneSmallPizza_24728a({ x1 }: {
    x1: number;
}): number {
        // Sally buys one small pizza at $8 and one family-size pizza that costs 'x1' times as much as the small pizza. How much does she spend in all?
        let smallPizzaCost = 8;
        let familySizePizzaCost = x1 * smallPizzaCost;
        let totalCost = smallPizzaCost + familySizePizzaCost;
        return totalCost;
    }

