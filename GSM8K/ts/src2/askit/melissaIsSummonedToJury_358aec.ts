// Recompilation count: 0
export function melissaIsSummonedToJury_358aec({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Melissa is summoned to jury duty. She spends 'x1' hours a day for 'x2' days listening to a court case. If Melissa is paid $15 per day but also has to pay $3 for parking each day, how much jury pay does she make per hour after expenses?
        // calculate total earnings: paid per day * number of days
        let totalEarnings = 15 * x2;
        // calculate total parking cost: cost per day * number of days
        let totalParkingCost = 3 * x2;
        // calculate net earnings: total earnings - total parking cost
        let netEarnings = totalEarnings - totalParkingCost;
        // calculate total hours: hours per day * number of days
        let totalHours = x1 * x2;
        // calculate earnings per hour: net earnings / total hours
        let earningsPerHour = netEarnings / totalHours;
        return earningsPerHour;
    }
