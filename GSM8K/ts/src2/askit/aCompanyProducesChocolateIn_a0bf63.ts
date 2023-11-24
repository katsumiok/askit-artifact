// Recompilation count: 0
export function aCompanyProducesChocolateIn_a0bf63({ x1 }: {
    x1: number;
}): number {
        // A company produces chocolate in bars. In one day, it can produce 'x1' bars. 
        // The company sells all the produced bars for $2 per bar. 
        // How much money will the company receive for selling produced chocolate bars during two weeks?
        const barsPerDay = x1;
        const pricePerBar = 2;
        const daysPerWeek = 7;
        const weeks = 2;

        const totalBarsProduced = barsPerDay * daysPerWeek * weeks;
        const totalMoneyReceived = totalBarsProduced * pricePerBar;

        return totalMoneyReceived;
    }
