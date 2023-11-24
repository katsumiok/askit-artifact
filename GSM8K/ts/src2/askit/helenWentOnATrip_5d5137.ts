// Recompilation count: 0
export function helenWentOnATrip_5d5137({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Given that one night at the hotel cost $80
    let hotelCostPerNight = 80;
    // and every bus trip was 10% of the price of one night at the hotel
    let busCostPerTrip = 0.1 * hotelCostPerNight;

    // Calculate total cost for the hotel and bus travels
    let totalHotelCost = x1 * hotelCostPerNight;
    let totalBusCost = x2 * busCostPerTrip;

    // Return total cost
    return totalHotelCost + totalBusCost;
}
