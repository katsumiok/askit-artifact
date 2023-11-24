// Recompilation count: 0
export function bennySawA_10Foot_e3ec61({ x1 }: {
    x1: number;
}): number {
        // Benny saw a 10-foot shark with 'x1' 6-inch remoras attached to it. 
        // What percentage of the shark's body length is the combined length of the remoras?

        // Convert shark's length to inch (1 foot = 12 inches)
        let sharkLengthInInch = 10 * 12;

        // Calculate the combined length of the remoras (x1 remoras, each of 6 inches)
        let remorasLengthInInch = x1 * 6;
        
        // Calculate the percentage of the shark's body length that the combined length of remoras occupy
        let percentage = (remorasLengthInInch / sharkLengthInInch) * 100;
        
        return percentage;
    }
