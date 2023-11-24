// Recompilation count: 0
export function jamesIsCountingHisPokemon_d45046({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {

    let totalCards = x1 + x2 + x3 - x4 + x5;
    
    let waterCards = x3 - x4;
    
    if (waterCards < 0 || totalCards <= 0) {
        throw Error("Invalid card count.");
    }

    return Math.round((waterCards / totalCards) * 100);
}
