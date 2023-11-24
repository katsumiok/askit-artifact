// Recompilation count: 1
export function mandyOwesBenedict_100They_fd02de({ x1 }: {
    x1: number;
}): number {
    // principal amount
    let principal = 100;

    // monthly interest rate
    let interest_rate = 0.02;

    // the total amount she needs to pay
    let total_amount = principal + principal * interest_rate * x1;

    return total_amount;
}
