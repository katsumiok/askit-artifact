// Recompilation count: 3
export function johnDrinksABottleOf_3537d0({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // John drinks a bottle of water every half hour.  A normal sudoku puzzle takes him 'x1' minutes.  An extreme sudoku takes 'x2' times that long.  How many bottles of water does he drink in that time?
    let totalTime = x1 * x2; // total time in minutes for extreme sudoku
    let totalHours = totalTime / 60; // convert minutes to hours
    let bottlesDrank = totalHours * 2; // He drinks 1 bottle every half an hour, so 2 bottles in 1 hour
    return Math.ceil(bottlesDrank); // Rounds up to the nearest whole number since partial consumption of a bottle is still counted as a whole
}
