// Recompilation count: 0
export function geneIsSewingAQuilt_fb8ffe({ x1 }: {
    x1: number;
}): number {
        // Gene is sewing a quilt out of old souvenir t-shirts. He has one shirt from each vacation he has been on. 
        // Every shirt is its own quilt block. Each row is made of blocks from a different year of vacations. 
        // He goes on four vacations a year and has been vacationing since he was 'x1' years old. 
        // He is now 34. How many quilt blocks does he have in total?
        
        let currentAge = 34;
        let vacationsPerYear = 4;
        
        let yearsVacationing = currentAge - x1;
        
        let totalQuiltBlocks = yearsVacationing * vacationsPerYear;
        
        return totalQuiltBlocks;
    }
