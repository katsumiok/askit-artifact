// Recompilation count: 0
export function tonyIsPaintingARoom_1feb96({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // North and South walls' area
    let northSouthWalls = x1 * x2 * 2; 
    // East and West walls' area
    let eastWestWalls = x3 * x4 * 2;
    
    //Total area to be painted
    let totalArea = northSouthWalls + eastWestWalls;
    
    //Number of gallons required
    let gallonsRequired = Math.ceil(totalArea / x5);
    
    //Total cost
    let totalCost = 12 * gallonsRequired;
    
    return totalCost;
}
