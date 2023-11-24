// Recompilation count: 0
export function alfieTheAlbatrossFliesX1_7b7061({ x1 }: {
    x1: number;
}): number {
    // Alfie, the albatross, flies 'x1' kilometers every day. If the circumference of the earth is 40,000 kilometers, 
    // how many days will it take Alfie to fly a distance equal to half of the way around the earth?
    
    const earthCircumference = 40000; // in kilometer
    const halfWayAroundTheEarth = earthCircumference / 2; // in kilometer
    
    // distance = speed x time 
    // so time = distance/speed
    const daysRequiredForHalfWayAroundTheEarth = halfWayAroundTheEarth / x1;
    
    return daysRequiredForHalfWayAroundTheEarth;   
}
