// Recompilation count: 0
export function inHisTrainingAsA_6594b9({ x1 }: {
    x1: number;
}): number {
    // In his training as a professional athlete, Tyson runs 'x1' meters every day. 
    // His coach, however, wants him to run 1/5 times more meters in a day. 
    // If he took the coach's advice and trained for a month, 
    // what is the total distance he covered in June?

    let additionalDistancePerDay = x1 / 5;
    let newDistancePerDay = x1 + additionalDistancePerDay; 

    // Assuming June has 30 days
    let totalDistanceInJune = newDistancePerDay * 30;

    return totalDistanceInJune;
}
