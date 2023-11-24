// Recompilation count: 0
export function joeHasTwiceAsMany_43c184({ x1 }: { x1: number }): number {
    // Joe has initially twice as many cars as Robert
    let joeCars = x1 * 2;
 
    // Joe sells 20% of his cars
    let carsSold = joeCars * 0.2;
    joeCars -= carsSold;

    // Joe gives away twice as many cars as the number he sold to his mother.
    let carsGiven = 2 * carsSold;
    joeCars -= carsGiven;

    // Remaining number of cars that Joe has
    return joeCars;
}
