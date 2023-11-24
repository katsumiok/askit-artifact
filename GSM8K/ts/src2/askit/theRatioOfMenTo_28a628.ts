// Recompilation count: 0
export function theRatioOfMenTo_28a628({ x1 }: { x1: number; }): number {
    // The total ratio is 5(men) + 9(women) = 14.
    // We know that 14 parts represent a total of 84 passengers, which means each part represents 84/14 = 6 passengers.
    // Since the ratio of women is 9, initially there are 9 * 6 = 54 women on the bus.

    let initialWomenCount = 9 * (84 / 14);

    // After 'x1' women alight from the bus, the remaining number of women is initialWomenCount - x1
    let remainingWomenCount = initialWomenCount - x1;

    return remainingWomenCount;
}
