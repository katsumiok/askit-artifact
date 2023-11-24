// Recompilation count: 0
export function dianeGaveANumberTrain_7e296b({ x1 }: {
    x1: number;
}): number {
    // Diane gave a number train a starting value of 20. 
    let startingValue = 20;
    // This starting value plus half the number was divided by 'x1' 
    let dividedResult = (startingValue + (startingValue / 2)) / x1;
    // and the resulting value was multiplied by the starting value minus 12.
    let finalValue = dividedResult * (startingValue - 12);
    // What was the final value of the number train?
    return finalValue;
}
