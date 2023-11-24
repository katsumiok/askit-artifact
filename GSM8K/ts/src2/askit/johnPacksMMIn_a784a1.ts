// Recompilation count: 0
export function johnPacksMMIn_a784a1({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // John packs M&M in small bags to eat.  He buys 'x1' large bags weighing 'x2' ounces each.  If an ounce of M&M has 'x3' M&M in it how many small bags can he make if he puts 'x4' in each small bag?
        const totalMAndMs = x1 * x2 * x3; // Total number of M&Ms John bought
        const smallBags = Math.floor(totalMAndMs / x4); // Number of small bags John can make
        return smallBags;
}
