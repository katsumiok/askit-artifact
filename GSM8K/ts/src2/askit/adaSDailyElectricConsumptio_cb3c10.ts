// Recompilation count: 0
export function adaSDailyElectricConsumptio_cb3c10({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Ada's daily electric consumption is 'x1' kilowatts per hour. She is planning to add a device that will consume 'x2' kilowatts per hour a day.
    // If a kilowatt per hour is $1.50, how much is the difference between Ada's weekly electric bill before and after she adds the new device?
    const costPerKilowatt = 1.50;
    const daysPerWeek = 7;

    // Calculate weekly cost before adding new device
    const oldWeeklyCost = x1 * costPerKilowatt * daysPerWeek;

    // Calculate weekly cost after adding new device
    const newWeeklyCost = (x1 + x2) * costPerKilowatt * daysPerWeek;

    // Calculate the difference
    const difference = newWeeklyCost - oldWeeklyCost;

    return difference;
}
