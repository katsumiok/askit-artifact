// Recompilation count: 0
export function johnVisitsHisParentsTwice_0838b3({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // John visits his parents twice a month.  It takes him 'x1' hours to drive there at a speed of 'x2' mph.  
        // Considering the round trip, how many miles a month does he drive when visiting his parents?

        // Using the basic speed formula 'distance = speed * time', we know that he drives 'x1*x2' miles each way. 
        // Since it's a round trip, he drives 2*'x1*x2' each visit. So, number of miles a month is 2*2*'x1*x2'.
        
        return 2 * 2 * x1 * x2;
    }
