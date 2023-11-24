// Recompilation count: 0
export function damienCreatedACurrencyBased_ef864d({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Damien finds 'x1' bottle caps a day and each bottle cap is worth $.25.  
    // How much money does he make in a 'x2' day month?
    
    // calculate the total number of bottle caps collected in the month
    let totalBottleCaps = x1 * x2;
    
    // Each bottle cap is worth $.25, so multiply total by .25
    return totalBottleCaps * 0.25;
}
