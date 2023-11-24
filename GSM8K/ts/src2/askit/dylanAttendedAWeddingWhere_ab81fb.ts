// Recompilation count: 0
export function dylanAttendedAWeddingWhere_ab81fb({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Calculate the total number of cookies at the reception
    const totalCookies = x1 * x2;

    // Calculate the number of cookies given to the church
    const churchCookies = totalCookies / 2;

    // Calculate the number of people in the church (number of cookies divided by the number of cookies per person)
    const peopleInChurch = churchCookies / x3;

    return peopleInChurch;
}
