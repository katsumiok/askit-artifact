// Recompilation count: 0
export function peterHasX1BoxesWith_df9bda({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // calculate the number of chocolate bars in one box for Peter and Martha
        let chocolateBarsInPeterBox: number = x3 / x1;
        let chocolateBarsInMarthaBox: number = x4 / x2;

        // return the difference between the number of chocolate bars in Peter box and Martha box
        return chocolateBarsInPeterBox - chocolateBarsInMarthaBox; 
    }
