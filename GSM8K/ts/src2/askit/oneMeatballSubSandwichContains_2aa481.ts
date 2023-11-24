// Recompilation count: 0
export function oneMeatballSubSandwichContains_2aa481({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // One meatball sub sandwich contains 'x1' meatballs.  
        // Sidney ordered 'x2' less than ten meatball sub sandwiches.
        // Then Mark ate 'x3' of Sidney's meatball sub sandwiches. 
        // So Sidney ordered another three sub sandwiches.  
        // How many meatballs were in the sub sandwiches that remained?

        let initialOrder = 10 - x2;
        let remainingAfterMark = initialOrder - x3;
        let finalOrder = remainingAfterMark + 3; // Sidney ordered another three sub sandwiches.
        
        let totalMeatballs = finalOrder * x1; // Total meatballs in Sidney's sub sandwiches.

        return totalMeatballs;
    }
