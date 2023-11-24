// Recompilation count: 0
export function inTateSGardenPond_cb8dc4({ x1, x2, x3, x4, x5, x6, x7, x8 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
    x8: number;
}): number {
        // In Tate’s garden pond, there are 'x1' male guppies, 'x2' female guppies, 'x3' male goldfishes, and 'x4' female goldfishes.  He buys 'x5' male guppies, 'x6' female guppy, 'x7' male goldfishes, and 'x8' female goldfishes.  How many more female fishes than male fishes does Tate have?

        const totalMaleFishes = x1 + x3 + x5 + x7;
        const totalFemaleFishes = x2 + x4 + x6 + x8;

        return totalFemaleFishes - totalMaleFishes;
    }

