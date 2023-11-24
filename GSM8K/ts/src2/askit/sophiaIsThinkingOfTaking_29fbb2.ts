// Recompilation count: 0
export function sophiaIsThinkingOfTaking_29fbb2({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Sophia is thinking of taking a road trip in her car, and would like to know how far she can drive on a single tank of gas. She has traveled 'x1' miles since last filling her tank, and she needed to put in 'x2' gallons of gas to fill it up again. The owner's manual for her car says that her tank holds 'x3' gallons of gas. How many miles can Sophia drive on a single tank of gas?

    // Calculate the mileage of the car by dividing the miles driven by the gallons of gas used
    let mileage = x1 / x2;

    // Multiply the mileage by the total gallons the car's tank can hold to find out how far Sophia can drive on a single tank of gas
    return mileage * x3;
}
