// Recompilation count: 1
export function doxaSlicedAnAppleInto_36f967({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Doxa sliced an apple into 'x1' pieces. She ate 'x2' slice, her sister ate 'x3' more than her, and her brother ate 'x4' more than her sister. 
        // So Doxa's sister ate (x2 + x3) and Doxa's brother ate (x2 + x3 + x4)
        // Summing all these up gives total slices they all ate
        return x2 + (x2 + x3) + (x2 + x3 + x4);
    }
