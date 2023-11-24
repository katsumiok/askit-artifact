// Recompilation count: 0
export function jackDecidesToVisitA_af70a4({ x1, x2, x3 }: {
    x1: number; // distance in miles
    x2: number; // speed in mph
    x3: number; // hours spent at the museum
}): number {
    // Jack decides to visit a museum 'x1' miles from home.
    // He drives 'x2' mph there and back.
    // He spends 'x3' hours at the museum.
    // How long is he gone from home?

    // First, figure out the total number of miles Jack drives: home to museum and back = x1 * 2
    let totalMiles = x1 * 2;

    // Then, figure out how much time the drive takes: total miles / speed = hours spent driving
    let hoursDriving = totalMiles / x2;

    // Finally, add the museum time and driving time together to get the total amount of time Jack is gone.
    return hoursDriving + x3;
}
