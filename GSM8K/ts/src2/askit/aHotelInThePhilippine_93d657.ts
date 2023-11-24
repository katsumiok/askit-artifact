// Recompilation count: 0
export function aHotelInThePhilippine_93d657({ x1, x2, x3, x4, x5, x6, x7, x8 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
    x7: number;
    x8: number;
}): number {
    let arrivalTime = x5; // Cameron's arrival time in pm
    let departureTime = x6 + 12; // Cameron's departure time converted to 24 hour format
    let totalHours = departureTime - arrivalTime; // Total stay hours
    
    // Cost if Cameron would pay for 24 hours
    let costFor24Hours = x2;

    // Cost if Cameron would add on x7 pesos for every hour after 12-hour mark
    let costForExtraHours = x1;
    if (totalHours > 12) {
        costForExtraHours += (totalHours - 12) * x7;
    }
    
    // The money Cameron would save
    let savings = costFor24Hours - costForExtraHours;

    return savings;
}
