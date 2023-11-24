// Recompilation count: 0
export function johnMakesHimselfAX1_402a95({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // John makes himself a 'x1' egg omelet with 'x2' oz of cheese and an equal amount of ham.  
        //Eggs are 'x3' calories each.  Cheese is 'x4' calories per ounce.  Ham is 'x5' calories per ounce.  
        //How many calories is the omelet?

        // Calculate calories from eggs
        let eggCalories = x1 * x3;

        // Calculate calories from cheese
        let cheeseCalories = x2 * x4;

        // Calculate calories from ham, 'x2' oz of ham as the amount of cheese and ham are equal
        let hamCalories = x2 * x5;

        // Total calories in omelet
        let totalCalories = eggCalories + cheeseCalories + hamCalories;

        return totalCalories;
    }
