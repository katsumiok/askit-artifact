// Recompilation count: 0
export function aCandleMeltsByX1_7b4e7b({ x1 }: {
    x1: number;
}): number {
    // A candle melts by 'x1' centimeters every hour that it burns.
    // How many centimeters shorter will a candle be after burning from 1:00 PM to 5:00 PM?
    // The duration between 1:00 PM and 5:00 PM is 4 hours
    let meltDuration = 4;
    let result = x1 * meltDuration;
    return result;
}
