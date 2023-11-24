// Recompilation count: 0
export function jasonHasAPhonePlan_312c93({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Jason has a phone plan of 'x1' minutes per month. Every day he has a 15-minute call with his boss, 
        // and he's had 'x2' extra minutes of call this month to other people. 
        // How many minutes does Jason have left if this month has 'x3' days?

    let totalMinutesUsed = (x3 * 15) + x2;
    let remainingMinutes = x1 - totalMinutesUsed;

    return remainingMinutes;
}
