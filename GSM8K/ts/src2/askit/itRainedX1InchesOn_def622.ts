// Recompilation count: 0
export function itRainedX1InchesOn_def622({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // It rained 'x1' inches on Monday and is expected to rain 'x2' more inch than twice of Monday’s total on Tuesday. How many inches of rain will there be on Tuesday?
    let tuesdayRain = 2 * x1 + x2;
    return tuesdayRain;
}
