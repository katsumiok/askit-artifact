// Recompilation count: 0
export function brianSBasementWasDamp_28a0d0({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // The low setting removes 'x1' liter per day, the medium setting removes twice as much (2 * x1) and the high setting removes twice as much as the medium setting (2 * 2 * x1).
        // So, calculate the total amount of water per day for each setting and multiply it by the number of days for each setting, then add all the quantities.
        const lowSetting = x1 * x2;
        const mediumSetting = 2 * x1 * x3;
        const highSetting = 2 * 2 * x1 * x4;
        return lowSetting + mediumSetting + highSetting;
    }
