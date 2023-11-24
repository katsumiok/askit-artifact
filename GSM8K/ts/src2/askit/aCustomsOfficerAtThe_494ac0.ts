// Recompilation count: 0
export function aCustomsOfficerAtThe_494ac0({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A customs officer at the main port of SeaSide clearances counted 'x1' containers of imported vehicles, each having 'x2' vehicles inside.
    const existingVehicles = x1 * x2;

    // The next day, more containers were brought in, and the total number of vehicles at the port became 30. 
    const totalVehicles = 30;

    // Calculate the number of leftover vehicles
    const leftoverVehicles = totalVehicles - existingVehicles;

    // Calculate the number of containers that were imported on the second day, assuming all the containers contain 'x3' vehicles.
    const secondDayContainers = leftoverVehicles / x3;

    // Return the result
    return secondDayContainers;
}
