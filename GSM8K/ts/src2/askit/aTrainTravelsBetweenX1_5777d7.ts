// Recompilation count: 1
export function aTrainTravelsBetweenX1_5777d7({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // A train travels between 'x1' different cities.  
    // It goes 'x2' miles from the first city to the second city,
    // 'x3' miles from the second city to the third city, 
    // and 'x4' miles less than that combined distance to go from the third city to the first city.  
    // It does this trip 'x5' times a day.  
    // The train needs service every 18,000 miles so how many days does it go between services?

    const serviceNeedEveryMiles = 18000; // The train needs service every 18,000 miles
    
    // Calculate the total Mileage for one complete round trip 
    const oneRoundTripMileage = x2 + x3 + (x2 + x3 - x4);
    
    // Calculate total Mileage the train covers in a day
    const totalMileageInOneDay = oneRoundTripMileage * x5;

    // Calculate the number of Day the train travels between services
    const daysBetweenServices = serviceNeedEveryMiles / totalMileageInOneDay;

    return daysBetweenServices;
}
