// Recompilation count: 0
export function twoFriendsArePlayingPick_dc1967({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Two friends are playing pick-up sticks. While playing, they noticed that there are 'x1' red sticks, and 'x2' more blue sticks than red. Also, the number of yellow sticks is 'x3' less than the blue sticks. How many sticks do they have?
    let redSticks = x1;
    let blueSticks = redSticks + x2;
    let yellowSticks = blueSticks - x3;

    return redSticks + blueSticks + yellowSticks;
}
