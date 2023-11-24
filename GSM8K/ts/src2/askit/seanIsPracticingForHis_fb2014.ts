// Recompilation count: 0
export function seanIsPracticingForHis_fb2014({ x1 }: {
    x1: number;
}): number {
    // First scene has twice the number of lines as song, but only a third of them are his
    let firstSceneLines = (x1 * 2) / 3;

    // Second scene has six more lines than the song, and four-fifths of them are his
    let secondSceneLines = ((x1 + 6) * 4) / 5;

    // Add up all the lines Sean needs to memorize
    let totalLines = x1 + firstSceneLines + secondSceneLines;

    return totalLines;
}
