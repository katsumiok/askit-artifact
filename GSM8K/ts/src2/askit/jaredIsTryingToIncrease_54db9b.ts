// Recompilation count: 0
export function jaredIsTryingToIncrease_54db9b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Jared is trying to increase his typing speed. He starts with 'x1' words per minute (WPM). After some lessons the next time he tests his typing speed it has increased to 'x2' WPM. If he continues to increase his typing speed once more by 'x3' words, what will be the average of the three measurements?
    return (x1 + x2 + (x2 + x3)) / 3;
}
