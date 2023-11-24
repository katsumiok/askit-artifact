// Recompilation count: 0
export function gretaAndCelindaAreBaking_a44821({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Greta bakes x1 cookies and Celinda bakes twice as many
    const totalCookiesBaked = x1 + (2 * x1);
    // They eat x2 of the cookies while they are cooling
    const eatenCookies = x2;
    // Find the remaining cookies, by subtracting the eaten cookies from total baked cookies
    const cookiesInBox = totalCookiesBaked - eatenCookies;
    // return the number of cookies in the box
    return cookiesInBox;
}
