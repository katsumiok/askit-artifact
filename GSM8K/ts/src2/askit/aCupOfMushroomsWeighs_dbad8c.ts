// Recompilation count: 0
export function aCupOfMushroomsWeighs_dbad8c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A cup of mushrooms weighs 'x1' grams and has 'x2' grams of protein.  
    // If John eats 'x3' grams of mushrooms every day how many grams of protein does he get per week?

    let gramsOfProteinPerGram = x2 / x1; // Calculate the amount of proteins per gram of mushroom
    let dailyProteinIntake = gramsOfProteinPerGram * x3; // multiply it by the amount John eats each day
    let weeklyProteinIntake = dailyProteinIntake * 7; // multiply it by 7 days to get weekly intake

    return weeklyProteinIntake;
}
