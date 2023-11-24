// Recompilation count: 0
export function mrMaximWorksAtThe_97a4ee({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Mr. Maxim works at The Best Cookeries Around restaurant. On a particular day, 'x1' people entered the restaurant in the morning. At around 10:00, 'x2' more people entered the restaurant. After a while, twice the number of people who entered the restaurant at 10:00 came in. By evening, an additional 'x3' times as many people as the number that came in first had entered the restaurant. 

    const morningPeople = x1;
    const firstAdditionPeople = x2;
    const secondAdditionPeople = 2 * x2;
    const eveningPeople = x3 * x1;

    // Total people that entered the restaurant on that day.
    const totalPeople = morningPeople + firstAdditionPeople + secondAdditionPeople + eveningPeople;

    return totalPeople;
}
