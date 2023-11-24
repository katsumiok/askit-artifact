// Recompilation count: 0
export function michaelIsTravelingOnThe_04b5a5({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Michael is traveling on the interstate at an average speed of 50km/hr (taking into account all the necessary stops for gas, relaxation, etc.). If he goes on like this for 'x1' days, and the distance between Alaska and Texas is 'x2' km, what percentage of this distance has he covered?
    const hoursInADay = 24;
    const distanceCovered = x1 * hoursInADay * 50; // 50km/hr, traveled for 'x1' days
    const percentageCovered = (distanceCovered / x2) * 100;
    return percentageCovered;
}
