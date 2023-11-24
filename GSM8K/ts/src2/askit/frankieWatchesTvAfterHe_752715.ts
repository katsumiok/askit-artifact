// Recompilation count: 0
export function frankieWatchesTvAfterHe_752715({ x1 }: {
    x1: number;
}): number {
    // Frankie watches 1+1=2 hours on Monday and Tuesday combined
    // He watches 1 + 0.5 = 1.5 hours on Thursday
    // He watches 1+1=2 hours on Friday
    // So, the total hours he watched on Monday, Tuesday, Thursday, and Friday = 2 + 1.5 + 2 = 5.5 hours

    // The total hours he watched for the week is 'x1'. So, the hours watched on Wednesday = x1 - 5.5
    let wednesday_hours = x1 - 5.5;

    // Each episode on Wednesday is 30 minutes=0.5 hours. So, the number of 30-minute episodes =
    let number_of_episodes = wednesday_hours / 0.5;

    // Return the number of 30-minute episodes Frankie watched on Wednesday.
    return number_of_episodes;
}
