// Recompilation count: 0
export function whenFredaCooksCannedTomatoes_223cea({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // calculate number of tomatoes used based on ounces of sauce created and ratio of tomatoes to ounces in can
    // We multiply by two because the quantity reduces to half when cooked
    let totalOuncesUsed = x2 * 2;
    // Each can have three tomatoes so we divide by x1 to find the number of cans then multiply by 3 to find the number of tomatoes used
    let totalTomatoesUsed = (totalOuncesUsed / x1) * 3;
    return totalTomatoesUsed;
}
