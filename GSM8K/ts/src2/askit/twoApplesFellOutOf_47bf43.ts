// Recompilation count: 0
export function twoApplesFellOutOf_47bf43({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Two apples fell out of the tree, and one of them landed on Newton's head.  
        // Newton picked up the two apples, put one in his pocket and threw the other apple into the tree, causing 'x1' more apples to fall out of the tree.  
        // Newton picked up these apples, put all but one in his pocket and threw the remaining one at the tree.  
        // This caused another 'x2' apples to fall out of the tree.  
        // Newton picked up all of the remaining apples and went home to make a pie. 
        // Assuming Newton put every apple he picked up in his pocket (except those he threw), 
        // he should have apples equal to original 2 + x1 (apples that fell after first throw) + x2 (apples that fell after second throw) - 2 (apples that he threw).
        
        const totalApples = 2 + x1 + x2 - 2;

        return totalApples;
    }
