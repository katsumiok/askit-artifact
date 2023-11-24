// Recompilation count: 0
export function patrickHasThreeGlueSticks_9bca51({ x1 }: {
    x1: number;
}): number {
        // Patrick has three glue sticks that are partially used. One has 1/6 left, the second has 2/3 left and the third one has 1/2 left. If a glue stick is 'x1' millimeters long originally, what is the total length of the glue sticks that are not used?
    let glueStick1 = x1 * 1/6; // length left from glue stick 1
    let glueStick2 = x1 * 2/3; // length left from glue stick 2
    let glueStick3 = x1 * 1/2; // length left from glue stick 3

    return glueStick1 + glueStick2 + glueStick3; // total length left
    }
