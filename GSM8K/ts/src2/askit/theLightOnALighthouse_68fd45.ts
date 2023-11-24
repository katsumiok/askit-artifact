// Recompilation count: 0
export function theLightOnALighthouse_68fd45({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // The light on a lighthouse blinks 'x1' times in 'x2' minutes. How long will it take the light to blink 'x3' times?
    // To answer this, we need the rate of the blink, which is 'x1' blinks / 'x2' minutes. 
    // We then multiply this by 'x3' to get the total time it will take for 'x3' blinks.
    let blinkRate = x2 / x1;
    return blinkRate * x3;
}
