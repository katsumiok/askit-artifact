// Recompilation count: 0
export function theAmountOfWaterPassing_54296a({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // The amount of water passing through a river at one point in time is 'x1' gallons. 
        // After a day of heavy rain, the amount of water passing through the river doubles at the same point. 
        // If the volume of water passing through the river at that point increases by 'x2' gallons on the third day, 
        // calculate the total amount of water passing through the river at that point.
        let totalWater = x1 * 2; // After heavy rain, water amount doubles
        totalWater += x2; // increase by x2 gallons on third day

        return totalWater;
}
