// Recompilation count: 0
export function ifSamAndHarryHave_1f2014({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // If Sam and Harry have 'x1' feet of fence between them, and they agree to split it with Harry getting 'x2' feet more than Sam, how much is left over for Sam?
    if(x1 < x2) {
        throw new Error("Harry cannot get more feet than total length of fence.");
    }
    let splittedFenceLength = x1 - x2;
    let samPortion = splittedFenceLength / 2;
    return samPortion;
}
