// Recompilation count: 0
export function johnHasX1HousesWith_c25c8a({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // John has 'x1' houses with 'x2' bedrooms each.  Each bedroom has 'x3' windows each.  There are an additional 'x4' windows in each house not connected to bedrooms.  How many total windows are there between the houses?
    
    let totalWindowsPerHouse = (x2 * x3) + x4;
    
    let totalWindows = x1 * totalWindowsPerHouse;

    return totalWindows;
}
