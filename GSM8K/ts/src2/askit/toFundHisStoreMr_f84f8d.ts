// Recompilation count: 0
export function toFundHisStoreMr_f84f8d({}: {}): number {
    // To fund his store, Mr. Josue solicited money from two banks. 
    // The first bank gave him $4000, and the second company gave him twice as much. 
    // If he initially had $5000 in capital, how much capital does he have now?

    const initialCapital = 5000; // Initial capital
    const firstBankLoan = 4000; // The amount he got from the first bank
    const secondBankLoan = 2 * firstBankLoan; // The amount he got from the second bank which is twice as much as the first bank loan

    const totalCapital = initialCapital + firstBankLoan + secondBankLoan; // Total capital

    return totalCapital;
}
