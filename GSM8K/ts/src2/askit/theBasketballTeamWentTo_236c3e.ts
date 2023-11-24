// Recompilation count: 0
export function theBasketballTeamWentTo_236c3e({ x1 }: {
    x1: number;
}): number {
    let ouncesEaten = 0;
    
    // First player: 6-ounce steak 
    ouncesEaten += 6;
    
    // Second player: beef tips of 'x1' ounces
    ouncesEaten += x1;
    
    // Third player: one-pound steak. Since 1 pound is equal to 16 ounces, we add 16 to our total
    ouncesEaten += 16;
    
    // Fourth and fifth players ordered vegetarian meals, so they do not add to the total ounces of meat eaten

    return ouncesEaten;
}
