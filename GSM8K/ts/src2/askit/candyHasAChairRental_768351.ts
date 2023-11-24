// Recompilation count: 0
export function candyHasAChairRental_768351({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Candy has a chair rental business. During the weekdays, 'x1' chairs are rented each day; but during weekends, 'x2' chairs are rented each day. If this continues, how many chairs in total will Candy be able to rent out in two 4-week months?
        
        // count total week days in two 4-week months
        let totalWeekDays = 5 * 4 * 2; // 5 days per week * 4 weeks per month * 2 months
        let totalWeekEnds = 2 * 4 * 2; // 2 days per weekend * 4 weeks per month * 2 months

        // calculate total chairs rented during week days and weekends
        let weekDayRentals = x1 * totalWeekDays;
        let weekEndRentals = x2 * totalWeekEnds;

        // return total chairs rented
        return weekDayRentals + weekEndRentals;
    }

