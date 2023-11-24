// Recompilation count: 0
export function claireMakesAX1Egg_780bee({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Claire makes a 'x1' egg omelet every morning for breakfast.  How many dozens of eggs will she eat in 'x2' weeks?
    
    // First calculate how many eggs she eats per week (7 days/week x X1 eggs/day)
    let eggsPerWeek = 7 * x1;

    // Then calculate how many she eats in X2 weeks (X2 weeks x eggs/week)
    let totalEggs = x2 * eggsPerWeek;
    
    // Finally, convert this total to dozens (12 eggs/dozen)
    let dozens = totalEggs / 12;

    return dozens;
}
