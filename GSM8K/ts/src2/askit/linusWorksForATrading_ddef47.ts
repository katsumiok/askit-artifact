// Recompilation count: 0
export function linusWorksForATrading_ddef47({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Linus works for a trading company. He buys a mobile device for $20 and sells it for twice the amount of the original price. If he bought 'x1' devices last Monday and 'x2' devices last Tuesday, how much profit was he able to earn after selling all the mobile devices he bought last Monday and Tuesday?
    let buyingPricePerDevice = 20;
    let sellingPricePerDevice = 2 * buyingPricePerDevice;
    
    let totalDevicesBought = x1 + x2;
    
    let totalBuyingPrice = totalDevicesBought * buyingPricePerDevice;
    let totalSellingPrice = totalDevicesBought * sellingPricePerDevice;
    
    let totalProfit = totalSellingPrice - totalBuyingPrice;

    return totalProfit;
}
