// Recompilation count: 0
export function timHasABoxWith_6fdf9a({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Tim has a box with 'x1' blue shoe boxes and 'x2' red shoe boxes. 
    // If he uses 'x3' blue shoeboxes and 1/3 of his red shoeboxes to go fishing,
    // how many red and blue shoe boxes are left in Tim's box?

    // Find the number of red shoe boxes used to go fishing
    let redShoeBoxesUsed = x2 / 3;

    // Find the number of remaining blue and red shoe boxes
    let remainingBlueShoeBoxes = x1 - x3;
    let remainingRedShoeBoxes = x2 - redShoeBoxesUsed;

    // Return the total number of remaining shoe boxes
    return remainingBlueShoeBoxes + remainingRedShoeBoxes;
}

