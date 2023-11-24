// Recompilation count: 0
export function aThreeToedSlothMoves_13d89e({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // A three-toed sloth moves very slowly, and only eats when he is up in his tree.  For a meal of berries, it takes the sloth 'x1' hours to make the trip down the tree, pick up berries, and climb back up into his tree.  Assuming he picks the same number of berries on each trip, what is the least number of berries he can pick up per trip down to the ground if he wants to collect 'x2' berries in 'x3' hours?
        let trips = Math.ceil(x3 / x1); //Number of trips it can make
        return Math.ceil(x2 / trips); // Number of berries it needs to pick on each trip
    }
