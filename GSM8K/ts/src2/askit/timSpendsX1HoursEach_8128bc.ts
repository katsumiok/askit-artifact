// Recompilation count: 0
export function timSpendsX1HoursEach_8128bc({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Given:
        // x1: the amount of hours Tim spends per day answering phones
        // x2: the amount of minutes it takes Tim to deal with a call
        // x3: the number of days in Tim's work week

        // First, we need to calculate total hours Tim spends answering phones in a week
        let totalHoursPerWeek = x1 * x3;

        // Then convert that total into minutes
        let totalMinutesPerWeek = totalHoursPerWeek * 60;

        // Finally, we calculate the number of calls Tim deals with by dividing 
        // the total minutes per week by the minutes it takes for him to deal with one call
        let numberOfCalls = totalMinutesPerWeek / x2;

        return numberOfCalls;
    }
