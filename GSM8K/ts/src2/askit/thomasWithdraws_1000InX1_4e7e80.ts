// Recompilation count: 0
export function thomasWithdraws_1000InX1_4e7e80({
  x1,
  x2,
  x3,
  x4,
}: {
  x1: number;
  x2: number;
  x3: number;
  x4: number;
}): number {
    // Calculate the number of bills Thomas initially withdraws
    let totalBills = 1000 / x1;
    
    // Subtract the number of bills Thomas loses
    totalBills -= x2;

    // Thomas uses half of the remaining bills to pay for a bill.
    totalBills /= 2;

    // Thomas triples his money
    totalBills *= 3;

    // Convert all his bills to 'x3' dollar bills
    totalBills = (totalBills * x1) / x3;

    // Now, calculate how many 'x4' dollar bills he has
    const finalBills = totalBills / (x4 / x3);

    return finalBills;
}
