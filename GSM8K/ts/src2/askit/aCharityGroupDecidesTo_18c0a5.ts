// Recompilation count: 0
export function aCharityGroupDecidesTo_18c0a5({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // A charity group decides to do a yard sale. 'x1' people donate 'x2' boxes of stuff each. 
    // They also have 'x3' boxes of stuff already.  They can fit 'x4' boxes worth of stuff per table.  
    // If they already own 'x5' tables, how many new tables do they need?
    
    let totalBoxes = (x1 * x2) + x3; // Total boxes from donation and already had
    let totalTableCapacity = x5 * x4; // Total capacity of already owned tables

    if (totalBoxes <= totalTableCapacity) {
        return 0; // No new tables needed
    }
    // Calculate new tables needed (and round up as you can't own a fraction of table)
    let newTablesNeeded = Math.ceil((totalBoxes - totalTableCapacity) / x4);

    return newTablesNeeded;
}
