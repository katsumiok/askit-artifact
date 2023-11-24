// Recompilation count: 2
export function karanBorrowed_3_650For_641ee8({}: {}): number {
        // Karan borrowed $3,650 for five months at an interest rate of 10%. She has to pay an equal amount every month. How much does she have to pay per month?

        // calculate the interest amount
        const interestAmount = 3650 * 0.10;
        // calculate the total amount Karan needs to return
        const totalAmount = 3650 + interestAmount;
        // calculate the amount Karan has to pay per month
        const perMonthPayment = totalAmount / 5;

        return perMonthPayment;
    }
