// Recompilation count: 0
export function tobiasBoughtABigPizza_bbf748({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Tobias bought a big pizza with 'x1' pieces. He ate 2/5 of the pieces on the first day, 'x2' pieces on the second day, and 7/13 of the remaining pieces on the third day. How many pizza pieces has he eaten so far?
    
    // Pieces eaten on the first day
    const firstDayEaten = x1 * (2 / 5);

    // Pieces remaining after the first day
    const afterFirstDay = x1 - firstDayEaten;

    // Pieces eaten on the second day is 'x2', and pieces left after the second day
    const secondDayEaten = x2;
    const afterSecondDay = afterFirstDay - x2;

    // Pieces eaten on the third day and leftover pieces
    const thirdDayEaten = afterSecondDay * (7 / 13);

    // Total pieces of pizza eaten
    const totalEaten = firstDayEaten + secondDayEaten + thirdDayEaten;

    return totalEaten; // Return the total pizza pieces Tobias has eaten so far
}
