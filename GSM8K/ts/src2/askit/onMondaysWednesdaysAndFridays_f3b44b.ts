// Recompilation count: 0
export function onMondaysWednesdaysAndFridays_f3b44b({ x1 }: {
    x1: number;
}): number {
        // On Mondays, Wednesdays, and Fridays, Kimo has three 1-hour  classes each day.  
        // On Tuesdays and Thursdays, he has two 2-hour classes each day.  
        // In one semester, there are 'x1' weeks of school.  
        // In one semester, how many hours does Kimo spend attending classes?
       
        // Calculate total hours Kimo spends in class per week
        const hoursPerWeek = 3 * 3 + 2 * 4;
        // Multiply the weekly hours by the number of weeks in a semester to get the total hours
        return hoursPerWeek * x1;
}
