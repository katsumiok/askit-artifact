// Recompilation count: 0
export function eachPersonInACertain_14a91c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Each person in a certain household consumes 0.2 kg of rice every meal. 
    // Supposing 'x1' members of the household eat rice every lunch and dinner, how many weeks will a 'x2' kg bag of rice last?
    const mealsPerDay = 2; // lunch and dinner
    const mealsPerWeek = mealsPerDay * 7; // meals per week
    const ricePerMeal = 0.2; // each person consumes 0.2 kg of rice per meal
    const totalRicePerWeek = x1 * ricePerMeal * mealsPerWeek; // total rice consumed by the whole household per week

    // Note: if totalRicePerWeek is 0, the result will be Infinity. However, as x1 (number of people) and 
    // ricePerMeal are both positive, totalRicePerWeek will only be 0 if there are no meals, which is not 
    // the case here. Therefore, we don't need to specifically handle the case where totalRicePerWeek is 0.

    return x2 / totalRicePerWeek; // how many weeks a 'x2' kg bag of rice will last
}
