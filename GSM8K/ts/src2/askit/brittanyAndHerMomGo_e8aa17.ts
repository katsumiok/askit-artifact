// Recompilation count: 0
export function brittanyAndHerMomGo_e8aa17({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Brittany and her mom go to the museum. The cost of admission is $12 for adults and $10 for children. Brittany's mom gives the cashier money for 'x1' child ticket and 'x2' adult ticket. If she received $8 in change, how much money, in dollars, did she give the cashier?
    const childTicketCost = 10;
    const adultTicketCost = 12;
    const totalTicketCost = (childTicketCost * x1) + (adultTicketCost * x2);
    const totalMoneyGivenToCashier = totalTicketCost + 8; // we add 8 because she received $8 in change
    return totalMoneyGivenToCashier;
}
