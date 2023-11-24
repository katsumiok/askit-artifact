// Recompilation count: 0
export function aFoodTruckOnlySells_70e362({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Calculate the costs
        let breadCostPerSandwich = 3 / x1;
        let cheeseAndCondimentCostPerSandwich = 30 / x2;
        let totalCostPerSandwich = breadCostPerSandwich + cheeseAndCondimentCostPerSandwich;

        // Calculate the gross revenue
        let grossRevenue = x3 * 7;

        // Calculate the net profit by subtracting the total costs from the gross revenue
        let netProfit = grossRevenue - (x3 * totalCostPerSandwich);

        return netProfit;
    }
