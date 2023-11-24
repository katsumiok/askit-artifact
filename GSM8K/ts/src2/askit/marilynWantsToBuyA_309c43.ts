// Recompilation count: 0
export function marilynWantsToBuyA_309c43({}: {}): number  {
    // Marilyn wants to buy a pair of boots online. On Amazon.com, the boots cost $16 and shipping costs $4. On eBay, those same pair of shoes are only $13, but shipping costs twice as much as it does on Amazon. How much more expensive do the boots work out to be on eBay?
    const amazonCost = 16 + 4;  // cost of boots + shipping on Amazon
    const ebayCost = 13 + (4 * 2);  // cost of boots + shipping on eBay (shipping is twice that of Amazon)

    return ebayCost - amazonCost;  // how much more expensive the boots are on eBay
}
