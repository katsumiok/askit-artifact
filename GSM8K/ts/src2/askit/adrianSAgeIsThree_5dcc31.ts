// Recompilation count: 0
export function adrianSAgeIsThree_5dcc31({ x1 }: {
    x1: number;
}): number {
    // Adrian's age is three times the age of Harriet
    let adrianAgeNow = 3 * x1;

    // Harriet is half the age of Zack
    let zackAgeNow = 2 * x1; 

    // Calculate the average age of the three in three years
    let avgAgeInThreeYears = (adrianAgeNow + 3 + x1 + 3 + zackAgeNow + 3) / 3;

    return avgAgeInThreeYears;
}
