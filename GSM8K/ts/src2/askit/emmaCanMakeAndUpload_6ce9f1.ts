// Recompilation count: 0
export function emmaCanMakeAndUpload_6ce9f1({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Emma can make and upload 'x1' vlogs per month. But she was only able to make 'x2' vlogs for the first week, 'x3' vlogs for the second week, and 'x4' vlogs for the third week. How many vlogs should she do to complete the 'x5' vlogs per month?
    const vlogsDone = x2 + x3 + x4;
    const vlogsNeeded = x5 - vlogsDone;
    if (vlogsNeeded < 0) {
        // If Emma has already made more vlogs than 'x5', return 0 because she don't need to make any more.
        return 0;
    }
    return vlogsNeeded;
}
