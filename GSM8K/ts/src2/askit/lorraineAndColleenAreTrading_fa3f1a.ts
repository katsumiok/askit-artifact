// Recompilation count: 0
export function lorraineAndColleenAreTrading_fa3f1a({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // convert the percentage of stickers she trades to an actual amount
    let smallStickersToTrade = Math.floor(0.90 * x1);
    let largeStickersToTrade = Math.floor(0.50 * x2);

    // calculate the number of buttons she gets from trading stickers
    let largeButtonsFromSmallStickers = Math.floor(smallStickersToTrade / 3);
    let largeButtonsFromLargeStickers = largeStickersToTrade;
    let smallButtonsFromLargeStickers = (x2 - largeStickersToTrade) * 3;

    // add up the total number of buttons she has at the end
    let totalButtons = largeButtonsFromSmallStickers + largeButtonsFromLargeStickers + smallButtonsFromLargeStickers;

    return totalButtons;
}
