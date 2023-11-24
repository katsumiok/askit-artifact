// Recompilation count: 0
export function johnCutsDownAn_80_6cd60b({ x1 }: {
    x1: number;
}): number {
    // John cuts down an 80-foot tree.  He can make logs out of 80% of it. He cuts it into 4-foot logs.  
    // From each of those logs, he cuts 'x1' planks.  He then sells each plank for $1.2.  How much does he make?

    let heightOfTree: number = 80;
    let percentUsable: number = 80/100; // convert percentage to decimal
    let lengthOfLog: number = 4;
    let pricePerPlank: number = 1.2;

    // Calculate total usable height
    let totalUsableHeight: number =  heightOfTree * percentUsable;
    // Calculate total logs created
    let totalLogs: number = totalUsableHeight / lengthOfLog;
    // Calculate total planks
    let totalPlanks: number = totalLogs * x1;
    // Calculate total income
    let totalIncome: number = totalPlanks * pricePerPlank;

    return totalIncome;

}
