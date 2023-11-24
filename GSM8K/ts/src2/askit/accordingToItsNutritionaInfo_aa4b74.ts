// Recompilation count: 0
export function accordingToItsNutritionaInfo_aa4b74({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // According to its nutritional info, a bag of chips has 'x1' calories per serving. If a 300g bag has 'x2' servings, 
    // how many grams can you eat if your daily calorie target is 'x3' and you have already consumed 'x4' calories?

    // Calculate remaining calories that can be consumed.
    let remainingCalories = x3 - x4;

    // Calculate the calories per gram.
    let caloriesPerGram = (x1 * x2) / 300;

    // calculate the amount of grams based on the remaining calories and the calories per gram in the chips.
    let gramsToEat = remainingCalories / caloriesPerGram;

    // return the calculated value.
    return gramsToEat;
}
