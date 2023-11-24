// Recompilation count: 0
export function aBumperCarRinkHas_0d5111({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Calculate the number of green cars
    const greenCars = x1 - x2;

    // Calculate the number of blue cars
    const blueCars = greenCars * x3;

    // Calculate the total number of red, green and blue cars
    const totalRGBCars = x1 + greenCars + blueCars;

    // Subtract the total number of red, green and blue cars from the total cars to get the number of yellow cars
    const yellowCars = x4 - totalRGBCars;

    return yellowCars;
}
