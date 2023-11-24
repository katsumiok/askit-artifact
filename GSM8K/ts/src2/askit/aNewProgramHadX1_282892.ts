// Recompilation count: 0
export function aNewProgramHadX1_282892({ x1 }: {
    x1: number;
}): number {
        // A new program had 'x1' downloads in the first month. 
        const firstMonthDownloads: number = x1;

        // The number of downloads in the second month was three times as many as the downloads in the first month, 
        const secondMonthDownloads: number = firstMonthDownloads * 3;

        // but then reduced by 30% in the third month. 
        const thirdMonthDownloads: number = secondMonthDownloads - (secondMonthDownloads * 0.3);
        
        // How many downloads did the program have total over the three months?
        const totalDownloads: number = firstMonthDownloads + secondMonthDownloads + thirdMonthDownloads

        return totalDownloads;
    }
