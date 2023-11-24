// Recompilation count: 0
export function roryMakesACakeThat_16887b({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Rory makes a cake that weighs 'x1' ounces. She cuts into 'x2' pieces. Rory and her mom each have a piece. How much does the remaining cake weigh?
        let pieceWeight = x1 / x2; // Weight of each piece
        let consumedPiecesWeight = pieceWeight * 2; // Weight of consumed pieces by Rory and her mom
        let remainingCakeWeight = x1 - consumedPiecesWeight; // Weight of the remaining cake

        return remainingCakeWeight;
    }
