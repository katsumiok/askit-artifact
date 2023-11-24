// Recompilation count: 0
export function forEachSmallTaskAccomplish_28ec4d({ x1 }: {
    x1: number;
}): number {
        // For each small task accomplished, Jairus gets $0.8 while Jenny gets $0.5. 
        // If each of them finished 'x1' tasks, how much more will Jairus get than Jenny?
        
        let jairusEarnings: number = x1 * 0.8; 
        let jennyEarnings: number = x1 * 0.5;
        
        return jairusEarnings - jennyEarnings; 
}
