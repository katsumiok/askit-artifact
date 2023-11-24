// Recompilation count: 2
export function avaAndEmmaWantTo_5483d2({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number { 
        // Ava and Emma want to know who is better at the new video game Ava got for her birthday.
        // They are each going to play one level and whoever has the highest score wins. 
        // They receive 'x1' points for every enemy they jump on, 'x2' points for each berry they collect, and 'x3' points for every second left on the timer when they finish the level.
        // If Ava jumps on 'x4' more enemies than Emma and collects 'x5' more berries, 
        // but finishes the level 'x6' seconds slower, what is the difference between their two scores?

        let difference = ((x1 * x4) + (x2 * x5)) - (x3 * x6);
        return Math.abs(difference);
}
