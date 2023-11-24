// Recompilation count: 0
export function jimDecidesToGoTo_72e89c({ x1 }: {
    x1: number;
}): number{
        
    const loanPerYear = 50000;
    const incomeBeforeCollege = 25000;
    const incomeAfterCollege = incomeBeforeCollege * 3;

    const totalLoan = loanPerYear * x1;
    const totalIncomeLoss = incomeBeforeCollege * x1;
    
    const totalLoss = totalLoan + totalIncomeLoss;

    let recoverYear = totalLoss / incomeAfterCollege;

    return Math.ceil(recoverYear); // rounding up because Jim can't work a fraction year
}
