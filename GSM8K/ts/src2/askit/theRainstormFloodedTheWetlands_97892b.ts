// Recompilation count: 0
export function theRainstormFloodedTheWetlands_97892b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // The rainstorm flooded the wetlands and washed Phineas Frog 'x1' yards away from his home in the swamp.  
        // To return home, he will need to hop and swim his way back.
        // If he hops on land at a speed of 'x2' yards per minute, and swims through water at a speed of 'x3' yards per minute, 
        // how long will it take Phineas, in minutes, to return home if half of the distance is on land and the other half is in water?
        
        let distanceOnLand = x1 / 2;  // dividing total distance by 2 because half the distance is on land.
        let distanceOnWater = x1 / 2;  // half distance is on water.

        // time = distance / speed
        let timeOnLand = distanceOnLand / x2;  // time taken on land
        let timeOnWater = distanceOnWater / x3;  // time taken on water.

        // Total time taken will be sum of time taken on land and time taken on water.
        let totalTime = timeOnLand + timeOnWater;

        return totalTime;
    }
