// Recompilation count: 0
export function aRealEstateAgentHas_98cebf({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A real estate agent has spent $5 on each newspaper ad and spent $75 on each television ad. 
    // He bought 'x1' newspaper ads and 'x2' television ads. 
    // How much did the real estate agent spend on buying all the ads?

    const costNewspaperAds = x1 * 5;
    const costTelevisionAds = x2 * 75;
    
    const totalCost = costNewspaperAds + costTelevisionAds;

    return totalCost;
} 
