// Recompilation count: 3
export function aMerchantWantsToMake_fe3257({ x1 }: {
    x1: number;
}): number {

    // Initial investment in jewelry and electronics
    const jewelryInitialInvestment = 5000;
    const electronicsInitialInvestment = 8000;
    
    // Expected increase rates
    const jewelryRateOfIncrease = 0.025; // 2.5% == 0.025 in decimal form
    const electronicsRateOfIncrease = 0.012; // 1.2% == 0.012 in decimal form
    
    // Calculate expected values after the rates of increase
    const jewelryExpectedValue = jewelryInitialInvestment * (1 + jewelryRateOfIncrease);
    const electronicsExpectedValue = electronicsInitialInvestment * (1 + electronicsRateOfIncrease);
    
    // Calculate potential profits
    const jewelryPotentialProfit = jewelryExpectedValue - jewelryInitialInvestment;
    const electronicsPotentialProfit = electronicsExpectedValue - electronicsInitialInvestment;
    
    // Choose the maximum profit between jewelry and electronics
    const profit = Math.max(jewelryPotentialProfit, electronicsPotentialProfit);
    
    return profit;
}

