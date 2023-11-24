// Recompilation count: 0
export function pamAndFredWentTo_ed3a54({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // calculate total number of rides: (Pam's + Fred's roller-coaster rides) + (2 * luge rides)
    const totalRides = (x1 + x2) + (2 * x3);

    // calculate total number of tickets used
    const totalTickets = totalRides * x4;

    // return the total number of tickets
    return totalTickets;
}
