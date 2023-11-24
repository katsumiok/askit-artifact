// Recompilation count: 0
export function borisHasX1ApplesBeck_11af8d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Boris has 'x1' apples. Beck has 'x2' fewer apples than Boris. If Boris gives Beck 'x3' apples, how many fewer apples does Beck have than Boris now?
    let borisApples = x1;
    let beckApples = borisApples - x2;
    let beckAfterGettingApples = beckApples + x3;
    let borisAfterGivingApples = borisApples - x3;
    return borisAfterGivingApples - beckAfterGettingApples;
}
