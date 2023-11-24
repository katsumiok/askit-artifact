// Recompilation count: 0
export function thereAreX1UnicornsLeft_dc45f7({ x1 }: {
    x1: number;
}): number {
    // There are 'x1' unicorns left in the world.  
    // One third of them are in the Scottish Highlands.  
    let unicornsInScotland = x1 / 3;
    
    // Two thirds of the Scottish unicorns are female.  
    let femaleScottishUnicorns = unicornsInScotland * (2 / 3);
    
    // How many female Scottish unicorns are there?
    return Math.round(femaleScottishUnicorns);
}
