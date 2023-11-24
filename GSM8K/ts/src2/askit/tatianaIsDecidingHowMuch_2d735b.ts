// Recompilation count: 0
export function tatianaIsDecidingHowMuch_2d735b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Tatiana has in total 'x1' + 'x2' hours during the weekend  
    let totalHours = x1 + x2;
    
    // After reading she has 'totalHours' - 'x3' hours left
    totalHours -= x3;
    
    // She uses 1/3 of the remaining time for video games
    let videoGamesHours = totalHours / 3;
    
    // The remaining time is spent on playing soccer
    let soccerHours = totalHours - videoGamesHours;
    
    // Calculating the percentage of the time spent on soccer
    let soccerPercentage = (soccerHours / (x1 + x2)) * 100;
    
    // Returning the answer
    return soccerPercentage;
}
