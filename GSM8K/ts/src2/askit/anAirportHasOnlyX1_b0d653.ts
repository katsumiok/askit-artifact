// Recompilation count: 4
export function anAirportHasOnlyX1_b0d653({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Number of flights the first plane makes throughout each day
    let totalFlightsFirstPlane = x2 * 2;

    // Flights of the first plane to Greece
    let flightsToGreece = totalFlightsFirstPlane * 3 / 4;

    // Remaining flights are split equally between France and Germany
    let remainingFlights = totalFlightsFirstPlane - flightsToGreece;

    // As per the condition the remaining flights are split equally, so flights to France would be
    let flightsToFrance = remainingFlights / 2;

    return flightsToFrance;
}
