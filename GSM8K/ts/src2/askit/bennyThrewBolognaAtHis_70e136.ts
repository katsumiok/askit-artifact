// Recompilation count: 0
export function bennyThrewBolognaAtHis_70e136({ x1 }: {
    x1: number;
}): number {
        // First calculate the amount of bologna thrown at red balloons
        let redBologna = 20 * 2; // number of red balloons times two pieces of bologna each

        // Then subtract that amount from the total amount of bologna thrown to find out how many pieces were thrown at yellow balloons
        let yellowBologna = x1 - redBologna;

        // Since three pieces were thrown at each yellow balloon, divide the total amount of yellow bologna by 3 to find the number of yellow balloons
        let yellowBalloons = yellowBologna / 3;
        
        return yellowBalloons; // The function returns the number of yellow balloons
    }
