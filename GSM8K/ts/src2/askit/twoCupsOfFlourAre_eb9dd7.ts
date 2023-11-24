// Recompilation count: 0
export function twoCupsOfFlourAre_eb9dd7({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Two cups of flour are needed to make a dozen cookies. Carla is making 'x1' cookies today and 'x2' cookies tomorrow. How many cups of flour will Carla need to bake the cookies today and tomorrow?
    const totalCookies = x1 + x2;
    const totalCups = totalCookies / 6; // 1 cup of flour for 6 cookies, 2 cups for a dozen
    return totalCups;
}
