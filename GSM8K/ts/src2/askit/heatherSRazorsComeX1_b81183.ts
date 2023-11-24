// Recompilation count: 0
export function heatherSRazorsComeX1_b81183({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Heather's razors come 'x1' to a pack and cost $4.00 a pack.
    // They are currently on sale for buy one get one free.  
    // She also has a $2.00 coupon.
    // How much will each individual razor cost, in cents, after the discount if she buys 'x2' packs of razors?

    let costPerPack = 400; // since it's in cents
    let coupon = 200; // also in cents
    // On buy one get one free, effectively, it's buying 'x2' packs for the price of 'x2/2' packs.
    let totalCost = costPerPack * (x2/2) - coupon;
    let totalRazors = x1 * x2;
    let costPerRazor = totalCost / totalRazors;
    return costPerRazor; 
}
