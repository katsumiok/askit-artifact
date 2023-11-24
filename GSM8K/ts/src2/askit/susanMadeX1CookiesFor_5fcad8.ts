// Recompilation count: 0
export function susanMadeX1CookiesFor_5fcad8({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculate the remaining cookies after husband took 'x3' cookies
    let remainingCookies = x1 - x3;

    // Check if nephews are there and remaining cookies are at least 0
    if (x2 > 0 && remainingCookies >= 0) {
        // Divide the remaining cookies equally among 'x2' nephews
        return remainingCookies / x2;
    } else {
        // If no nephews or remaining cookies are less than 0, each gets 0 cookies
        return 0;
    }
}
