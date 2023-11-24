// Recompilation count: 0
export function tomDecidesToGiveHis_81e93d({ x1 }: {
    x1: number;
}): number {
        // Tom decides to give his wife an anniversary getaway.  The plane tickets cost $5000 each.  The hotel is 20% more expensive than normal because it is a busy weekend.  The normal hotel price is $1500 per day.  If they are there for 'x1' days how much did the trip cost?
    
    const planeTicketCost = 5000;           // Cost of each plane ticket
    const planeTickets = planeTicketCost * 2;  // Tom and his wife both need tickets
    
    const normalHotelRate = 1500;           // Normal price per day for hotel
    const increasedHotelRate = normalHotelRate * 1.2;   // Hotel rate is increased by 20%
    
    const totalHotelCost = increasedHotelRate * x1;     // Total cost for hotel during their stay
    
    const totalTripCost = planeTickets + totalHotelCost;  // Total cost of trip
    
    return totalTripCost;
}
