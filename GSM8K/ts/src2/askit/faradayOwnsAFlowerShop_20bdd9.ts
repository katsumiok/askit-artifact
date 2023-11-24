// Recompilation count: 0
export function faradayOwnsAFlowerShop_20bdd9({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Faraday owns a flower shop. He sells a sunflower that costs $2 each and a bouquet of sunflower that costs $8. If Faraday earned $26 from the sunflower and $56 from the bouquet per day, and if each bouquet has 'x1' sunflowers, how many sunflowers was Faraday able to sell after 'x2' days?

    // We know that Faraday earns $26 from sunflowers and $56 from the bouquet per day
    // Therefore, number of sunflowers sold per day = $26/2 = 13 sunflowers
    // and number of bouquets sold per day = $56/8 = 7 bouquets
    
    let sunflowersPerDay = 26 / 2;
    let bouquetsPerDay = 56 / 8;

    // Total sunflowers sold after 'x2' days = ('x2' * number of sunflowers sold per day) + ('x2' * number of bouquets sold per day * number of sunflowers in each bouquet)
    let totalSunflowers = (x2 * sunflowersPerDay) + (x2 * bouquetsPerDay * x1);

    return totalSunflowers;
}
