// Recompilation count: 0
export function shannonMakesHerOwnMadeleine_3ab5d5({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Shannon makes her own madeleine cookies and eats 'x1' a night as a treat.  
    // She wants to make enough cookies to last her for 'x2' days by storing them in the freezer. 
    // Her recipe makes 'x3' dozen madeleine cookies.  
    // How many dozens of cookies will she need to make so she has enough for 'x4' days?
    
    // Calculate how many cookies she eats in 'x4' days
    let totalCookiesNeeded = x1 * x4;

    // Calculate how many cookies her recipe makes
    let cookiesPerRecipe = x3 * 12; 

    // Calculate how many dozens of cookies she needs to make
    let totalDozenNeeded = Math.ceil(totalCookiesNeeded / cookiesPerRecipe);

    return totalDozenNeeded;
}
