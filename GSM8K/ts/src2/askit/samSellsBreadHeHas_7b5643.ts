// Recompilation count: 0
export function samSellsBreadHeHas_7b5643({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
    // Sam sells bread. He has a target of selling 'x1' crates of bread in a week. One week he was closed on Monday and Friday. 
    // Over the weekend he sold 'x2' crates. On Tuesday he sold 'x3' crates, on Wednesday 'x4' crates, and Thursday 'x5' crates. 
    // By how many crates was Sam off from his target for the week?

    // Total crates sold by Sam in the week
    let totalSold = x2 + x3 + x4 + x5;

    // By how many crates was Sam off from his target
    let offTarget = x1 - totalSold;

    return offTarget;
}
