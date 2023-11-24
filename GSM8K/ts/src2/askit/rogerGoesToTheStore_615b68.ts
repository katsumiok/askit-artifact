// Recompilation count: 0
export function rogerGoesToTheStore_615b68({ x1 }: { x1: number }): number {
    // Define cost of favorite coffee per pound
    const favoriteCoffeeCostPerPound: number = 5;

    // The more expensive brand cost 20% more
    const expensiveCoffeeCostPerPound: number = favoriteCoffeeCostPerPound * 1.2;

    // He uses 'x1' pound of coffee per day and he buys for a week's supply
    const coffeeNeededForWeek: number = x1 * 7;

    // The cost of coffee for the week
    const weekCoffeeCost: number = coffeeNeededForWeek * expensiveCoffeeCostPerPound;

    // Donut cost
    const donutCost: number = 2

    // Total cost (exploit coffee + donut)
    const totalCost: number = weekCoffeeCost + donutCost;

    return totalCost;
}
