// Recompilation count: 0
export function jessicaIsTryingToFigure_5e7669({}: {}): number {
    // define monthly minimum payments
    const studentLoanMinPayment = 300;
    const creditCardMinPayment = 200;
    const mortgageMinPayment = 500;

    // calculate the total minimum payment per month
    const totalMinPayment = studentLoanMinPayment + creditCardMinPayment + mortgageMinPayment;

    // Calculate the monthly payment if Jessica wants to pay 50% more than the minimum
    const monthlyPayment = totalMinPayment * 1.5;

    // calculate and return the total payment in a year
    return monthlyPayment * 12;
}
