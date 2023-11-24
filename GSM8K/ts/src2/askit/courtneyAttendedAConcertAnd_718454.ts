// Recompilation count: 2
export function courtneyAttendedAConcertAnd_718454({ x1 }: {
    x1: number;
}): number {
    // Courtney reported that the audience was 'x1' in number.
    // Kelly said that Courtney had made the mistake of overstating the number of people in attendance by 20%.
    // If Kelly was right, how many people really attended the concert?
    // To find the original number, we have to divide the overstated number by 1 + overstatement percentage.
    const overstatementPercentage = 20;
    const realAttendance = x1 / (1 + overstatementPercentage / 100);
    return realAttendance;
}
