// Recompilation count: 0
export function tabithaAgreedToPayJohn_f27e36({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {

    // Calculating the amount Jill earned
    let jillEarnings: number = 10 * (x1 + x2);

    // Calculating the amount John earned
    // John worked twice as long as Jill on Saturday and three times as long as Jill on Sunday 
    let johnEarnings: number = 10 * (2*x1 + 3*x2);

    // Returning the difference
    return johnEarnings - jillEarnings;
}
