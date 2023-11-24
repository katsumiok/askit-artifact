// Recompilation count: 0
export function krisIsTryingToEarn_da305e({ x1, x2, x3 }: {
    x1: number; // total hours required to earn a video game achievement
    x2: number; // Kris plays for half an hour every day for 'x2' weeks
    x3: number; // Kris plays for 'x3' hours every day for a week
}): number {
    // Calculate total hours Kris have already played
    let halfHourEverydayForX2Weeks = 0.5 * 7 * x2;
    let x3HoursEverydayForAWeek = x3 * 7;
    let totalHoursPlayed = halfHourEverydayForX2Weeks + x3HoursEverydayForAWeek;

    // Check if Kris has already earned the achievement
    if (totalHoursPlayed >= x1) {
        return 0;
    }

    // Calculate how many hours Kris still needs to play to earn the achievement
    let hoursNeeded = x1 - totalHoursPlayed;
    return hoursNeeded;
}
