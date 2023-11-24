// Recompilation count: 0
export function ofTheX1AvailableCars_2470e0({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Of the 'x1' available cars for rent, 'x2' are automatic cars, 'x3' are manual cars, and the rest are semi-automatic. 
    // What percentage of the cars are semi-automatic?

    let semiAutomaticCars = x1 - x2 - x3; // calculate the number of semi-automatic cars
    let percentageSemiAutomaticCars = (semiAutomaticCars / x1) * 100; // calculate the percentage

    return percentageSemiAutomaticCars;
}
