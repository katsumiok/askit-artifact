// Recompilation count: 0
export function theBiggestWaterslideAtFive_3eb665({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {

    // Calculate the time taken to slide down each slide.
    const timeForSlide1 = x1 / x2;
    const timeForSlide2 = x3 / x4;

    // Return the difference in times
    return timeForSlide1 - timeForSlide2;
}
