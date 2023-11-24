// Recompilation count: 0
export function theElevatorInJackS_21653d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // The elevator in Jack's building supports a maximum load of 'x1' kg. 
    // An adult weighs an average of 'x2' kg. 
    // If Jack rides the elevator with 'x3' other adults, 
    // by how much will they have exceeded the maximum load of the elevator?
  
    // First find the total weight of 'x3' adults plus Jack (we're assuming Jack's weight is also 'x2')
    let totalWeight = (x3 + 1) * x2;
  
    // If total weight does not exceed the elevator's maximum load, return 0
    if (totalWeight <= x1) {
        return 0;
    }
  
    // Else, return the amount they have exceeded the maximum load by subtracting max load from total weight
    return totalWeight - x1; 
}
