// Recompilation count: 0
export function annePurchasedABoxOf_58a6af({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Anne purchased a box of sweets that contains 'x1' packs, and each pack has 'x2' pieces. 
    // She kept two packs and gave the rest to her 'x3' friends equally. 
    // How many pieces of sweets did each of her friends receive?

    // Calculate total pieces of sweets Anne initially had
    const totalSweets = x1 * x2;

    // Subtract the pieces of sweets in the two packs Anne kept
    const remainingSweets = totalSweets - (2 * x2);

    // Distribute the remaining sweets equally among her friends
    const sweetsPerFriend = remainingSweets / x3;

    return sweetsPerFriend;
}
