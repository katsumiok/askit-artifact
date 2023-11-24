// Recompilation count: 0
export function johnDecidesToGetA_80f21b({}: {}): number {
    // The worth of John's house
    const houseWorth = 250000; 

    // The percentage of house worth John gets as loan
    const loanPercentage = 0.40; 

    // The loan amount John gets
    const loanAmount = houseWorth * loanPercentage; 

    // The percentage of loan amount John uses to pay his debts
    const debtPaymentPercentage = 0.60; 

    // The amount John uses to pay his debts
    const debtPayment = loanAmount * debtPaymentPercentage; 

    // The amount left after John pays his debts from the loan
    const leftover = loanAmount - debtPayment;

    return leftover;
}
