// Recompilation count: 0
export function aDanceStudioOffersLessons_b83302({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // A dance studio offers lessons to students. It costs $25 per session to rent the studio 
    //plus $1.50 per student per session. At present, the dance studio has 'x1' students and 
    //is rented 'x2' days a week. How much are the expected earnings of the dance studio in a month?
    
    const rentalCost = 25;
    const perStudentCost = 1.5;
    const weeksInMonth = 4;
    
    const totalCostPerSession = rentalCost + (x1 * perStudentCost);
    const totalCostPerWeek = totalCostPerSession * x2;
    
    return totalCostPerWeek * weeksInMonth;
}
