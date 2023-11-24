// Recompilation count: 0
export function aCompanyWantedToBuy_c748b4({ x1 }: {
    x1: number;
}): number {
        // the planned price for each computer
        let plannedPrice = 700;

        // calculate the new price that has increased by 10%
        let newPrice = plannedPrice * 1.1;

        // multiply the new price by the number of computers to get the total amount of money paid
        return x1 * newPrice;
    }
