// Recompilation count: 0
export function jennyBuysX1BagOf_05d772({ x1, x2, x3, x4, x5, x6 }: {
    x1: number; // number of bags per week
    x2: number; // number of cookies per bag
    x3: number; // cookies in her son's lunch box
    x4: number; // days she puts cookies in lunch box
    x5: number; // husband's cookies per day
    x6: number; // husband's cookies eating days
}): number {
    // Total cookies bought in a week
    let totalCookies = x1 * x2;

    // Cookies put in son's lunch box
    let cookiesForSon = x3 * x4;

    // Cookies eaten by the husband
    let cookiesForHusband = x5 * x6;

    // Subtract cookies eaten by son and husband from total
    let cookiesForJenny = totalCookies - (cookiesForSon + cookiesForHusband);

    return cookiesForJenny;
}
