// Recompilation count: 0
export function thereAreX1SnailsIn_56bdca({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // There are 'x1' snails in one aquarium and 'x2' snails in another aquarium. 
    // The difference between the number of snails in the two aquariums is twice the amount of fish in both aquariums. 
    // If both aquariums have the same number of fish in them, so the number of fish in each aquarium will be difference of x1 and x2 divided by 4.
    let diff = Math.abs(x1 - x2)
    return diff / 4; 
}
