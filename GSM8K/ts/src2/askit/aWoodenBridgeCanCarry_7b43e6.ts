// Recompilation count: 0
export function aWoodenBridgeCanCarry_7b43e6({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // A wooden bridge can carry no more than 'x1' pounds. A delivery truck filled with identical boxes, each weighing 'x2' pounds, will pass over the bridge. The combined weight of the driver and the empty truck is 'x3' pounds. What is the maximum number of boxes which can be loaded onto the truck while not exceeding the bridge's weight limit?
    let maxWeightWithoutBoxes: number = x3; // Max weight of the empty truck
    let capacityOfBridge: number = x1; // Max weight bridge can carry
    let weightPerBox: number = x2; // Weight of each box

    // calculate the weight left for boxes
    let weightLeftForBoxes: number = capacityOfBridge - maxWeightWithoutBoxes;

    // calculate the max number of boxes
    let maxBoxes: number = Math.floor(weightLeftForBoxes / weightPerBox);

    return maxBoxes;
}
