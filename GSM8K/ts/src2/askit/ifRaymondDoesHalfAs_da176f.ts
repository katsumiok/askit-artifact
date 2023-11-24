// Recompilation count: 0
export function ifRaymondDoesHalfAs_da176f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Calculate the amount of laundry David does
    let davidLaundry = x2 / x1;
    // Calculate the amount of laundry Raymond does
    let raymondLaundry = x2 / 2;
    // Return the difference
    return Math.abs(raymondLaundry - davidLaundry);
}
