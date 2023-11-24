// Recompilation count: 0
export function ryanSAllowanceIs_6_0aee5c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // calculate the total amount Ryan earned by doing chores
    const totalAmountEarned = x1 * 6;
    
    // calculate the total cost of ice cream cones for Ryan and his friends
    const totalIceCreamCost = (x2 + 1) * 1.25;

    // calculate the remaining money after buying ice creams
    const remainingMoney = totalAmountEarned - totalIceCreamCost;

    // calculate how many movie tickets can Ryan buy
    const numberOfMovieTickets = Math.floor(remainingMoney / 6.5);

    return numberOfMovieTickets;
}
