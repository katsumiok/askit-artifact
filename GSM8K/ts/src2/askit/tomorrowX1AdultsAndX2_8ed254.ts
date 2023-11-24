// Recompilation count: 8
export function tomorrowX1AdultsAndX2_8ed254({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Tomorrow, 'x1' adults and 'x2' babies will be attending a function at Mia’s restaurant. 
    // The restaurant has 'x3' times as many regular chairs as high chairs.
    // If there are 'x4' high chairs, how many more chairs does she have to get?

    let totalCurrentChairs = (x3 * x4) + x4; // Total chairs restaurant currently has (regular chairs + high chairs)
    let totalRequiredChairs = x1 + x2; // Total chairs required for tomorrow's function
    let additionalChairsNeeded = totalRequiredChairs - totalCurrentChairs; // Number of chairs Mia needs to get more
    return additionalChairsNeeded > 0 ? additionalChairsNeeded : 0; 
    // If 'additionalChairsNeeded' is negative, means no need to get more chairs, So return 0.
}
