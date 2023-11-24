// Recompilation count: 0
export function thereAreX1FastAnd_677d5e({ x1 }: { x1: number }) {
    // Considering Deepa has seen each movie three times, 
    // the total number of tickets she bought is x1 * 3. 
    // She paid $216 in total, so the average price per ticket is $216 / (x1 * 3).

    // Protect against division by zero
    if(x1 === 0) {
        throw new Error("Number of Fast and Furious movies cannot be zero");
    }

    const totalTickets = x1 * 3;
    const totalCost = 216;
    const averagePricePerTicket = totalCost / totalTickets;

    return averagePricePerTicket;
}
