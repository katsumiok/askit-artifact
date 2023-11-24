// Recompilation count: 0
export function eachSolid_10FootSection_5a60f7({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Each solid 10-foot section of a redwood tree weighs 'x1' pounds. 
    // Termites ate 30% of this redwood's wood. 
    // If the redwood is 'x2' feet tall, how much does it weigh?
    // First calculate total weight of tree before termites ate it
    let totalWeightBeforeTermites = x1 * (x2 / 10);

    // Calculate how much the termites ate
    let weightEatenByTermites = totalWeightBeforeTermites * 0.3;

    // Subtract from total to get weight after termites
    let weightAfterTermites = totalWeightBeforeTermites - weightEatenByTermites;

    return weightAfterTermites;
}
