// Recompilation count: 0
export function chadOrderedABuildYour_0cfdf1({ x1 }: {
    x1: number;
}): number {
    const baseBurrito = 6.50;
    const extraMeat = 2.00;
    const extraCheese = 1.00;
    const avocado = 1.00;
    const sauces = x1 * 0.25;
    const mealUpgrade = 3.00;
    const giftCard = 5.00;
    
    const totalOwing = baseBurrito + extraMeat + extraCheese + avocado + sauces + mealUpgrade - giftCard;

    return totalOwing; 
}
