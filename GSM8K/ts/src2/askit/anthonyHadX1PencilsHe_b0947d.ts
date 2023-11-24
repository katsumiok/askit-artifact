// Recompilation count: 0
export function anthonyHadX1PencilsHe_b0947d({ x1 }: {
    x1: number;
}): number {
        // Anthony had 'x1' pencils. He gave 1/2 of his pencils to Brandon, and he gave 3/5 of the remaining pencils to Charlie. He kept the remaining pencils.
        let pencilsForBrandon = x1 / 2;
        let remainingPencils = x1 - pencilsForBrandon;
        let pencilsForCharlie = (3 / 5) * remainingPencils;
        let pencilsKept = remainingPencils - pencilsForCharlie;

        return Math.floor(pencilsKept); // Use Math.floor() to round down to nearest whole number, as it doesn't make sense to have a fraction of a pencil
    }
