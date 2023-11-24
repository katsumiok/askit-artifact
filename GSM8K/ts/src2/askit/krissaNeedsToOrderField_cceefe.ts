// Recompilation count: 0
export function krissaNeedsToOrderField_cceefe({ x1 }: {
    x1: number;
}): number {
        // Calculate the number of students in each size 
        const extraSmall = x1;
        const small = 2 * extraSmall;
        const medium = small - 4;
        const large = medium / 2;
        const extraLarge = large + 6;
        
        // The total number of shirts is the sum of the numbers of all sizes
        const total = extraSmall + small + medium + large + extraLarge;
        
        // Return the total
        return total;
}
