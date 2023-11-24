// Recompilation count: 0
export function carlyWantsToTreatHer_f0ac23({}: {}): number {
    // hamburger cost
    const hamburgerCost: number = 4;
    // potato fries cost
    const potatoFriesCost: number = 0.30;
    // can of fruit drinks cost
    const fruitDrinksCost: number = 2;
    // money Carly gave
    const moneyGave: number = 50;

    // total cost calculation
    const totalCost: number = (hamburgerCost * 5) + (potatoFriesCost * 10) + (fruitDrinksCost * 5);

    // calculate change
    const change: number = moneyGave - totalCost;

    // return the change
    return change;
}
