// Recompilation count: 5
export function aFamilyOfX1_2_a23b07({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A family of 'x1' (2 adults and 'x2' kids) are to divide a watermelon such that each adult gets a slice that is twice as big as that of each kid. What percentage of the watermelon does each adult get?
        let sliceForKid: number = 100 / (x2 + 4);
        let sliceForAdult: number = 2 * sliceForKid;   
        return sliceForAdult; 
    }
