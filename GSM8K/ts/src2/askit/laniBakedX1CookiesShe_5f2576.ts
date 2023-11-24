// Recompilation count: 0
export function laniBakedX1CookiesShe_5f2576({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Lani baked 'x1' cookies. She ate 'x2' cookies and placed the rest equally into five jars. How many cookies were in each jar?
    
    const remainingCookies = x1 - x2;
    const cookiesPerJar = remainingCookies / 5;
    return cookiesPerJar;
}
