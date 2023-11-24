// Recompilation count: 0
export function fourFriendsOrderedFourPizzas_a2466a({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Four friends ordered four pizzas for a total of 'x1' dollars. If two of the pizzas cost 'x2' dollars, how much did each of the other two pizzas cost if they cost the same amount?
    let totalCostOfTwoPizzas = x1 - x2;
    return totalCostOfTwoPizzas / 2;
}
