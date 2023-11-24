// Recompilation count: 0
export function whileWalkingDownTheStreet_4f69fc({ x1 }: {
    x1: number;
}): number {
        // While walking down the street with his 'x1' younger siblings, Greg found $20. To be fair to his siblings, he decided to split the money equally. How much money did each of them get?
       let totalSiblings: number = x1 + 1;
       let sharedAmount: number = 20 / totalSiblings;
 
       return sharedAmount;  
}
