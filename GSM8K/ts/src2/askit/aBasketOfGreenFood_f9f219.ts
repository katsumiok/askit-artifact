// Recompilation count: 0
export function aBasketOfGreenFood_f9f219({ x1 }: {
    x1: number;
}): number {
    // A basket of green food costs $25 and a basket of red food costs $18. 
    // If you buy 'x1' baskets of green food and red food, 
    // how much will you have to pay in total if you get $2 off for each basket of red food?
    
    let greenFoodCost = 25;
    let redFoodCost = 18;
    let discount = 2;

    let totalCost = (greenFoodCost + (redFoodCost - discount)) * x1;
    return totalCost;
}
