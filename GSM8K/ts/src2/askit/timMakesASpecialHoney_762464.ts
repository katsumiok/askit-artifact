// Recompilation count: 0
export function timMakesASpecialHoney_762464({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Define the cost of each ingredient
    const costOfPassionFruit: number = 6;
    const costOfJackFruit: number = 8;
    const costOfHoney: number = 10;
    const costOfJamJar: number = 50;

    // Calculate the total cost of ingredients to make 1 jar of the mixture
    const costPerJar: number = x2 * costOfPassionFruit + 1.5 * costOfJackFruit + x3 * costOfHoney;

    // Calculate the total cost of ingredients needed to make 'x4' jars
    const totalCostOfIngredients: number = costPerJar * x4;

    // Calculate the total income from selling 'x4' jars
    const totalIncome: number = costOfJamJar * x4;

    // Subtract the total cost from the total income to get the profit
    const profit: number = totalIncome - totalCostOfIngredients;

    return profit;
}
