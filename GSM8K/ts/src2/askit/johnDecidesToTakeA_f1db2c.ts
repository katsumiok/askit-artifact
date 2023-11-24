// Recompilation count: 0
export function johnDecidesToTakeA_f1db2c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // John decides to take a cooking class.  The class meets 'x1' times a week for 'x2' hours each time for 'x3' weeks.  If he learns a new recipe for every 1.5 hours of class time, how many recipes does he learn?
        
        let totalHours = x1 * x2 * x3;
        return totalHours / 1.5;
    }
