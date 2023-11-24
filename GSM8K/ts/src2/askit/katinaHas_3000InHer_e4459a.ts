// Recompilation count: 0
export function katinaHas_3000InHer_e4459a({ x1 }: {
    x1: number;
}): number {
        // Katina has $3000 in her savings account. If she removes $100 from the account every month, how much money will be remaining within the account after 'x1' years?
    let initialAmount = 3000; //Initial savings
    let amountToRemove = 100; //Amount removed monthly
    let monthsPerYear = 12;

    return initialAmount - (x1 * monthsPerYear * amountToRemove);
}
