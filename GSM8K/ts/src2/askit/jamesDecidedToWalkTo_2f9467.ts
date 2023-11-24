// Recompilation count: 1
export function jamesDecidedToWalkTo_2f9467({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // James decided to walk to the store. When he got halfway there he realized he forgot something at home and had to walk back. 
    // If his home is 'x1' miles from the store and he walks 'x2' miles per hour how long did it take him to reach the store?
    
    // He had to walk 'x1' miles to the store and then 'x1' miles back home
    // so total distance he travelled is 2 * x1
    let totalDistance = 2 * x1;

    // As distance = speed * time, so time = distance / speed
    // So time taken to reach the store = totalDistance / x2
    let timeTaken = totalDistance / x2;

    return timeTaken;
}
