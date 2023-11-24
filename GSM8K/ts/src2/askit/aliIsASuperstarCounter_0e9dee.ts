// Recompilation count: 0
export function aliIsASuperstarCounter_0e9dee({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number { 
    const aliMedals = x1;
    const izzyMedals = aliMedals - x2;
    const totalMedals = (aliMedals + izzyMedals) * x3;
    return totalMedals;
}
