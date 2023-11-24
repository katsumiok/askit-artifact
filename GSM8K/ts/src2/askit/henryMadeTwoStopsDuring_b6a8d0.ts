// Recompilation count: 0
export function henryMadeTwoStopsDuring_b6a8d0({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // Henry made two stops during his 60-mile bike trip. He first stopped after 'x1' miles. His second stop was 'x2' miles before the end of the trip. How many miles did he travel between his first and second stops?
    const totalTrip = 60;
    return totalTrip - x1 - x2;
}
