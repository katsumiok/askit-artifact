// Recompilation count: 0
export function thereWereX1CatsOn_610976({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // There were 'x1' cats on a rock. Four boats came and carried away 'x2' cats each, and later, 3/5 of the remaining cats ran after a mouse they'd seen. How many cats were left on the rock?
    
    let catsCarriedAwayByBoats = 4 * x2;
    let catsRemainingAfterBoats = x1 - catsCarriedAwayByBoats;
    let catsThatRanAfterMouse = catsRemainingAfterBoats * 3/5;
    
    return catsRemainingAfterBoats - catsThatRanAfterMouse;
    }
