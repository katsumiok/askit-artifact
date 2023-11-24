// Recompilation count: 0
export function aLocalTownIsExpanding_b251cd({ x1 }: { x1: number; }): number {
        
    // In the first year, 'x1' homes are built
    let homesBuiltInFirstYear = x1;

    // In the second year, three times this many homes are built
    let homesBuiltInSecondYear = 3 * homesBuiltInFirstYear;

    // Count up homes built so far
    let totalHomesBuiltSoFar = homesBuiltInFirstYear + homesBuiltInSecondYear;

    // In the third year, they build double the amount of homes built so far
    let homesBuiltInThirdYear = 2 * totalHomesBuiltSoFar;
    
    // Total homes built over three years
    let totalHomesBuiltOverThreeYears = totalHomesBuiltSoFar + homesBuiltInThirdYear;

    return totalHomesBuiltOverThreeYears;

}
