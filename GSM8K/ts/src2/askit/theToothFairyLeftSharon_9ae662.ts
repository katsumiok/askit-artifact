// Recompilation count: 0
export function theToothFairyLeftSharon_9ae662({ x1 }: { x1: number; }): number {
    const firstToothCost = 5;
    const nextThreeTeethCost = 1;
    const lastTeethCost = nextThreeTeethCost / 2;

    const nextThreeTeeth = 3;
    
    // checking if Sharon lost more than 4 teeth
    if(x1 < 1) {
        throw new Error("The number of teeth can not be less than 1");
    }
    
    let costForLastTeeth = x1 > 0 ? x1 * lastTeethCost : 0;

    return firstToothCost + (nextThreeTeeth * nextThreeTeethCost) + costForLastTeeth;
}
