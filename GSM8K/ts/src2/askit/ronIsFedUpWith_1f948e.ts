// Recompilation count: 0
export function ronIsFedUpWith_1f948e({ x1 }: {
    x1: number;
}): number {
        // Ron is fed up with the pothole in front of his house. If it doesn't get fixed, it's going to do $450 worth of damage to his car. Unfortunately, the city council refuses to fix it, and will fine Ron $120 for unauthorized road maintenance if he fixes it himself. Ron will also have to buy 'x1' buckets of asphalt that each cost $25. How much money does Ron save by fixing the pothole?

        // Calculate the cost of fixing the road himself
        var fixCost = x1 * 25 + 120;
  
        // Calculate the amount of money saved 
        var moneySaved = 450 - fixCost;
 
        // Return the amount of money saved
        return moneySaved;
}
