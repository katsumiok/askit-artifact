// Recompilation count: 0
export function aCatEatsNineSausages_b52d84({ x1 }: {
    x1: number;
}): number {
        // A cat eats nine sausages in 'x1' minutes. A dog can eat the same number of sausages in 2/3 the amount of time the cat takes. Calculate the average time the two take the eat the sausages.
    let dogTime = (2 / 3) * x1;
    return (x1 + dogTime) / 2;
}
