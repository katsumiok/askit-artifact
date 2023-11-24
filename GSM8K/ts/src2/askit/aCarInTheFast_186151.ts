// Recompilation count: 0
export function aCarInTheFast_186151({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A car in the fast lane is traveling at 'x1' miles/hour. 
        // A car in the slow lane is traveling at half that speed. 
        // If the car in the fast lane traveled for a total of 'x2' miles, 
        // calculate the time the car in the slow lane took to cover the same distance?
        
        // Time = Distance/Speed 
        let fastLaneSpeed = x1;
        let slowLaneSpeed = fastLaneSpeed / 2;

        // Since distance covered by both the cars is same, 
        // the time taken by the slow car will be more.
        let timeTakenBySlowCar = x2 / slowLaneSpeed;

        return timeTakenBySlowCar;
    }
