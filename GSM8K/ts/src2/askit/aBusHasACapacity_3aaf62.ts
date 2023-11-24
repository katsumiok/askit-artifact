// Recompilation count: 0
export function aBusHasACapacity_3aaf62({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A bus has a capacity of 'x1' people. When it departed Chengli city, it had 'x2' people. 
    // On the first stop, 'x3' people entered the bus. 
    // On the second station, 3/4 of the total number of people who entered the bus at the first station entered the bus. 
    // If the number of passengers on the bus doubled at the third station, 
    // calculate the total number of people required to fill the remaining spaces on the bus.

    const secondStationPassengers = x3 * 3/4;
    const thirdStationPassengers = (x2 + x3 + secondStationPassengers) * 2;
    const remainingSpaces = x1 - thirdStationPassengers;

    return remainingSpaces > 0 ? remainingSpaces : 0;
}
