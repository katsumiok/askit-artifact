// Recompilation count: 0
export function forANewYearS_d4b607({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // For a New Year's resolution, Andy wants to lose 'x1' lbs. by his birthday, which is July 19th. Today is December 31st. If Andy needs to burn 'x2' calories to lose a pound, how much of a calorie deficit (net amount of calories burned vs. calories consumed) does he need each day to reach his goal?
    
    // First we calculate how many total calories he needs to burn, which is the amount of weight he wants to lose (x1) multiplied by the amount of calories he needs to burn per pound (x2)
    let totalCaloriesToBurn = x1 * x2;

    // Andy's birthday is on July 19th, so there are 200 days from December 31st to July 19th
    const totalDays = 200; 

    // Then, we divide the total calories he needs to burn by the total days to get how many calories he needs to have a deficit of each day
    let dailyCalorieDeficit = totalCaloriesToBurn / totalDays;

    return dailyCalorieDeficit;
}
