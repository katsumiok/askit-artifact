// Recompilation count: 0
export function mariaInvitedX1OfHer_ae1929({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Maria invited 'x1' of her friends over for a water balloon fight in the backyard. 
        // At the start of the game, Maria gave each of her friends 'x2' water balloons. 
        // She had one water balloon for herself.  
        // Then her mom came out and gave each person 'x3' more balloons.  
        // How many total balloons did the girls have?

        // Calculate total balloons at the start of the game:
        let startBalloonTotal = (x1 * x2) + 1;
        
        // Calculate how many balloons Maria's mom added:
        let addedBalloonTotal = (x1 + 1) * x3;
        
        // Total balloons is the sum of the start balloons and added balloons:
        let totalBalloonCount = startBalloonTotal + addedBalloonTotal;
        
        return totalBalloonCount;
    }
