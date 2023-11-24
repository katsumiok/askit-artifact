// Recompilation count: 0
export function rachelBoughtX1CookiesAnd_a70ab3({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Rachel bought 'x1' cookies and Janet gave her 'x2' cookies. The other day her brother ate 'x3' of those cookies. How many cookies are left for Rachel?
    let totalCookies = x1 + x2;
    let remainingCookies = totalCookies - x3;
    return remainingCookies;
}
