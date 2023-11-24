// Recompilation count: 0
export function missMariaIsAMiddle_cc9bb7({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        let totalBasketballCards = 6 * x1; // total basketball cards collected by Miss Maria
        let totalBaseballCards = 5 * x2; // total baseball cards collected by Miss Maria

        let totalCards = totalBasketballCards + totalBaseballCards; // total cards collected by Miss Maria
        let remainingCards = totalCards - x3; // cards after Miss Maria keeps some for herself
        
        let numberOfStudents = remainingCards / 10; // each student got 10 cards
       
        return numberOfStudents;
    }
