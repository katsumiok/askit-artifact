// Recompilation count: 2
export function randyHasX1OatmealCookies_511e04({ x1, x2, x3, x4, x5, x6, x7 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
}): number {
    // Calculate the total number of cookies Randy has after each event
    let totalCookies = x1 + x2 + x3; // Initial number of cookies
    totalCookies -= x4; // Remove the cookies Randy ate for an early day snack
    totalCookies -= x5; // Remove the oatmeal cookies Randy ate for lunch
    totalCookies -= x6; // Remove the sugar cookies Randy gave to his friends
    totalCookies += 3 * x7; // Add the cookies Randy baked for dinner

    // Return the total number of cookies Randy has now
    return totalCookies;
}
