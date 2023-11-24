// Recompilation count: 0
export function budMakesHomemadeMacaroniAnd_2c0f18({}: {}): number {
    // Bud makes homemade macaroni and cheese once a week.  
    // The pasta costs $1.00 a box, and he spends $3.00 on cheddar cheese and twice that amount for the gruyere cheese.  
    let pastaCost: number = 1;
    let cheddarCheeseCost: number = 3;
    let gruyereCheeseCost: number = cheddarCheeseCost * 2;
    
    // Total cost for a week
    let costPerWeek: number = pastaCost + cheddarCheeseCost + gruyereCheeseCost;
    
    // Total number of weeks in a year
    let weeksInAYear: number = 52;

    // Total cost in a year
    let yearlyCost = costPerWeek * weeksInAYear;
    
    return yearlyCost;
}
