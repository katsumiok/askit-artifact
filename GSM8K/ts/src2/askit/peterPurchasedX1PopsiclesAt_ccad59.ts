// Recompilation count: 0
export function peterPurchasedX1PopsiclesAt_ccad59({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Peter purchased 'x1' popsicles at $0.25 each. He also purchased 'x2' ice-cream bars at $0.50 each. How much did he pay in total in dollars?
    // Calculate the total cost of popsicles
    let popsiclesCost = x1 * 0.25;

    // Calculate the total cost of ice-cream bars
    let iceCreamBarsCost = x2 * 0.5;

    // Return the total cost
    return popsiclesCost + iceCreamBarsCost;
}
