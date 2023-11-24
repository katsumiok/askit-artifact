// Recompilation count: 6
export function aNursesStationOrdersBandages_458072({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A nurses’ station orders bandages in bulk packs of 50. On the first day, the nurses used 'x1' bandages and ordered one bulk pack of bandages. On the second day, they used ten fewer bandages. On the third day, they ordered two bulk packs of bandages and only used half a pack. They had 'x2' bandages left at the end of the third day. How many bandages did they start with on the first day?

        // From the problem, we can understand that:
        // On the first day, they ordered one bulk pack of bandages and used 'x1' bandages.
        // On the second day, they used 'x1 - 10' bandages. 
        // On the third day, they ordered two bulk packs of bandages and used half a pack i.e. 50/2 = 25 bandages.
        // They had 'x2' bandages left at the end of the third day.

        // So, the total number of bandages they had on the first day will be the sum of bandages they used plus the bandages left, minus the bandages they ordered.
        // This can be calculated as: 
        // Total on first day = 'x1'(first day used) + 'x1 - 10'(second day used) + '25'(third day used) + 'x2'(bandages left) - '50'(first day ordered) - '50 * 2'(second day ordered)
        
        return x1 + x1 - 10 + 25 + x2 - 50 - 100;
    }
