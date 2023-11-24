// Recompilation count: 1
export function laurenIsACartoonistShe_46719f({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // For large-sized pictures
    const largeDays = Math.ceil(x4 / x1);

    // For medium-sized pictures
    const mediumDays = Math.ceil(x5 / x2);

    // For small-sized pictures
    const smallDays = Math.ceil(x6 / x3);

    // Total time needed
    const totalTime = largeDays + mediumDays + smallDays;

    return totalTime; 
}
