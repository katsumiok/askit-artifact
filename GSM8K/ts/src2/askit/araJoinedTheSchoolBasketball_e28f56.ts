// Recompilation count: 0
export function araJoinedTheSchoolBasketball_e28f56({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Ara joined the school basketball team four years ago. She has been playing 'x1' games every year. 
        // If her score for every game is 'x2' points, calculate the total number of points she has scored in the four years.
        let totalGamesInFourYears = x1 * 4;
        let totalPoints = totalGamesInFourYears * x2;
        return totalPoints;
    }
