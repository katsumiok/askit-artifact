// Recompilation count: 0
export function johnCollectsPeachesForX1_616ae9({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // John collects peaches for 'x1' hours.  He can collect 'x2' peaches a minute.  
        // How many peaches does he collect?
        // 1 hour is 60 minutes. So, convert the hours into minutes and multiply with the number of peaches John can collect in a minute.

        const minutes = x1 * 60;
        const totalPeachesCollected = minutes * x2;

        return totalPeachesCollected;
    }
