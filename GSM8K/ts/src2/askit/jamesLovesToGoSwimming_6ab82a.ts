// Recompilation count: 0
export function jamesLovesToGoSwimming_6ab82a({ x1 }: {
    x1: number;
}): number {
    // the distance James has to swim
    const totalDistance = 20;
    
    // the distance James swims at his initial speed
    const initialSwimDistance = totalDistance * 0.6;
    
    // the remaining distance after resting
    const remainingDistance = totalDistance - initialSwimDistance;
    
    // the time it takes James to swim the initial distance
    const initialSwimTime = initialSwimDistance / x1;
    
    // the time James rests for
    const restTime =  initialSwimTime / 2;
    
    // the speed James swims at after resting
    const reducedSpeed = x1 / 2;
    
    // the time it takes James to swim the remaining distance at the reduced speed
    const remainingSwimTime = remainingDistance / reducedSpeed;
    
    // the total time it takes James to swim across the lake
    const totalTime = initialSwimTime + restTime + remainingSwimTime;
    
    return totalTime;
}
