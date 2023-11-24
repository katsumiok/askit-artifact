// Recompilation count: 0
export function cherrieWantsToBuyChristmas_4b4e15({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // calculate total gifts
    const giftsForFriendsWantX3 = x2 * x3;
    const giftsForFriendsWantX5 = x4 * x5;
    const totalGifts = giftsForFriendsWantX3 + giftsForFriendsWantX5 + x6;

    return totalGifts;
}
