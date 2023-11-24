// Recompilation count: 0
export function eachSleeveOfGrahamCrackers_ac1d7e({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
        // Each sleeve of graham crackers makes the base for 'x1' large smores.  There are 'x2' sleeves in a box.  
        // If 'x3' kids want 'x4' smores apiece and 'x5' adults will eat 'x6' smore apiece, how many boxes of graham crackers will they need?

        // Calculate total number of smores needed
        let totalSmores = (x3 * x4) + (x5 * x6);
        // Calculate total sleeves needed as each sleeve makes 'x1' smores
        let totalSleeves = Math.ceil(totalSmores / x1);
        // Calculate total boxes needed as each box has 'x2' sleeves
        let totalBoxes = Math.ceil(totalSleeves / x2);

        return totalBoxes;
    }
