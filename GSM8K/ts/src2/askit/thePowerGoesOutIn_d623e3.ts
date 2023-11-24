// Recompilation count: 0
export function thePowerGoesOutIn_d623e3({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Flashlights for every person and each room
    let flashlightTotal = x2 + 2*x1; 

    // Candles in half the rooms
    let candleTotal = 0.5 * x1 * (x3 + x4); 

    // Returning total candles and flashlights
    return flashlightTotal + candleTotal;
}
