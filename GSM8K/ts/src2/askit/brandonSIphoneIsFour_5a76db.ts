// Recompilation count: 0
export function brandonSIphoneIsFour_5a76db({ x1 }: {
    x1: number;
}): number {
        // Brandon's iPhone is four times as old as Ben's iPhone. 
        // Ben's iPhone is two times older than Suzy's iPhone. 
        // If Suzy’s iPhone is 'x1' year old, how old is Brandon’s iPhone?

        // Calculate Ben's iPhone's age, which is two times older than Suzy's iPhone.
        let benIphone = 2 * x1;

        // Then, calculate Brandon's iPhone's age, which is four times as old as Ben's iPhone.
        let brandonIphone = 4 * benIphone;

        // Return the age of Brandon's iPhone
        return brandonIphone;
    }
