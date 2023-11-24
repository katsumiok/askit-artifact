// Recompilation count: 0
export function johnEarnedX1DollarsAn_67c15c({ x1, x2, x3, x4, x5, x6, x7 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
}): number {
        // John earned 'x1' dollars an hour and worked 'x2' hours in the week.  
        // If he spends 'x3' dollars on gas and wants to deposit 'x4' dollars in the bank,
        // how many 'x5' dollar pens can he buy after he buys 'x6' pencils that cost 'x7' dollars each?

        // Calculate weekly earning
        const earning = x1 * x2;

        // Calculate expenses
        const expensesOnGas = x3;
        const expensesForBank = x4;
        const expensesOnPencils = x6 * x7; // x6 pencils times x7 dollars each

        // Calculate remaining money
        const remainingMoney = earning - expensesOnGas - expensesForBank - expensesOnPencils;

        // If there is not enough money left to buy a pen return 0
        if (remainingMoney < x5) {
            return 0;
        } 
        
        // Calculate and return how many pens can John buy
        return Math.floor(remainingMoney / x5);
    }
