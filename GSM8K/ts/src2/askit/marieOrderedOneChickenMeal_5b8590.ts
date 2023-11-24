// Recompilation count: 0
export function marieOrderedOneChickenMeal_5b8590({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Marie ordered one chicken meal that costs $12, 'x1' packs of milk that costs $3 each, 'x2' apples that cost $1.50 each, and some boxes of pizza. Marie paid a total of $50. How many boxes of pizza did Marie order if each box costs $8.50?
        
        // Calculate total cost of chicken meal, milk packs, and apples
        const totalCostWithoutPizza = 12 + (x1 * 3) + (x2 * 1.5);
        
        // Subtract this cost from total amount paid to find out how much was spent on pizzas
        const pizzaCost = 50 - totalCostWithoutPizza;
        
        // Divide this by cost of each pizza to find out how many pizzas were ordered
        return pizzaCost / 8.5;
    }
