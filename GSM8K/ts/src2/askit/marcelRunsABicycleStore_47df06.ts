// Recompilation count: 0
export function marcelRunsABicycleStore_47df06({ x1 }: {
    x1: number;
}): number {
    // Define the prices for each type of bicycle
    const priceOfMTB = 500;
    const priceOfBMX = priceOfMTB / 2;
    const priceOfTrekking = 450;

    // Calculate the number of each type of bicycle
    const numberOfTrekking = x1 / 2;
    const numberOfBMX = x1 * 0.15;
    const numberOfMTB = x1 - (numberOfTrekking + numberOfBMX);

    // Calculate the total earning
    let total = (numberOfMTB * priceOfMTB) + (numberOfBMX * priceOfBMX) + (numberOfTrekking * priceOfTrekking);

    return total;
}
