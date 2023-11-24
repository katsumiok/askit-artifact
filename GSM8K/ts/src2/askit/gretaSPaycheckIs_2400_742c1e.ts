// Recompilation count: 0
export function gretaSPaycheckIs_2400_742c1e({}: {}): number {
    // Greta’s paycheck is $2400.00. She puts 50% of her pay into her retirement account. She then uses 20% of her paycheck to make her monthly car payment. After funding her retirement and paying for her car, how much money does she have left to spend?
    
    let paycheck = 2400;
    let retirement = paycheck * 0.50;
    let carPayment = paycheck * 0.20;
    let remainingMoney = paycheck - (retirement + carPayment);

    return remainingMoney;
}
