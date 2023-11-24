// Recompilation count: 0
export function juliaAndNadineWereGiven_eef191({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    //Calculate total cost for balloons
    const balloonsCost: number = (x1 * 12) * (0.5 / x2);

    //Calculate total cost for ice cream
    const iceCreamCost: number = x3 * 7;

    //Total cost for cake
    const cakeCost: number = 11;

    //Total cost of all items
    const totalCost: number = cakeCost + balloonsCost + iceCreamCost;

    //Since they split the cost in between them, each must have been given half of the total cost.
    return totalCost / 2;
}
