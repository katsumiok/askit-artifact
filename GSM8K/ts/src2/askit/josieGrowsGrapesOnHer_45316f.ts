// Recompilation count: 0
export function josieGrowsGrapesOnHer_45316f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Josie grows grapes on her 10-acre farm.  Each acre produces 'x1' tons of grapes per year, and each ton of grapes makes 'x2' barrels of wine.  How many barrels of wine does her farm produce per year?
        const totalAcres = 10;
        const totalGrapes = x1 * totalAcres;
        const totalBarrels = totalGrapes * x2;
        return totalBarrels;
    }
