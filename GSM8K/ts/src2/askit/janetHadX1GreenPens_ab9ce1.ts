// Recompilation count: 0
export function janetHadX1GreenPens_ab9ce1({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
        // Janet had 'x1' green pens and 'x2' yellow pens. Then she bought 'x3' bags of blue pens and 'x4' bags of red pens. There were 'x5' pens in each bag of blue and 'x6' pens in each bag of red. How many pens does Janet have now?
    let greenAndYellowPens = x1 + x2;
    let bluePens = x3 * x5;
    let redPens = x4 * x6;
    let totalPens = greenAndYellowPens + bluePens + redPens;

    return totalPens;
    }
