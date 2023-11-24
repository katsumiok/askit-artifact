// Recompilation count: 0
export function immaHasX1CatsShe_c36092({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Imma has 'x1' cats. She feeds her cats twice a day with 'x2' grams of cat food. How many days will 'x3' grams of cat food last?
    let totalFoodPerDay = x1 * x2 * 2;
    let totalDays = x3 / totalFoodPerDay;
    return totalDays;
}
