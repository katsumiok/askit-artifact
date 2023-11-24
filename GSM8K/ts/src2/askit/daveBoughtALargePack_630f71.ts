// Recompilation count: 0
export function daveBoughtALargePack_630f71({}: {}): number {
    // initial eaten by dave
    let daveEatenFries = 14;
    
    // seagull ate this much
    let seagullEatenFries = daveEatenFries / 2;
    
    // three pigeons ate these much fries
    let pigeonEatenFries = 3 * 3;
    
    // ants stole one fry
    let antsStoleFries = 1;
    
    // left over fries after ants stole one
    let leftOverFries = 5;

    // now reverse engineer the raccoon part
    let friesBeforeRaccoonStole = (leftOverFries + antsStoleFries) / (1 - 2/3);

    // adding what the pigeons, the seagull, and Dave ate, we get the total number of fries
    let totalFries = friesBeforeRaccoonStole + pigeonEatenFries + seagullEatenFries + daveEatenFries;

    // rounding off to the nearest integer in case of decimal and returning 
    return Math.round(totalFries);
}
