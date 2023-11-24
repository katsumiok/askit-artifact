// Recompilation count: 0
export function dijanaAndAnisLiveNear_f43012({ x1 }: { x1: number }): number {
    // Dijana and Anis live near a lake, and every weekend they go out rowing into the lake. On a Sunday morning, both went out rowing, and Dijana rowed for 'x1' miles the whole day. Anis rowed 1/5 times more miles than Dijana. Calculate the total distance the two of them rowed on that day.
    const anisMiles = x1 + (x1 * 1/5);
    const totalMiles = x1 + anisMiles;
    return totalMiles;
}
