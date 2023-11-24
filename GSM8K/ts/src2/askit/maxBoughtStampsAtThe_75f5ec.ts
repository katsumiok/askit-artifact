// Recompilation count: 0
export function maxBoughtStampsAtThe_75f5ec({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Max bought stamps at the post office. Some of the stamps had a snowflake design, some had a truck design, and some had a rose design. 
        // Max bought 'x1' snowflake stamps. He bought 'x2' more truck stamps than snowflake stamps, and 'x3' fewer rose stamps than truck stamps.
        // How many stamps did Max buy in all?

        // The total number of truck stamps Max bought
        let truckStamps = x1 + x2;
        
        // The total number of rose stamps Max bought
        let roseStamps = truckStamps - x3;

        // The total number of all the stamps Max bought
        let totalStamps = x1 + truckStamps + roseStamps;

        return totalStamps;
    }

