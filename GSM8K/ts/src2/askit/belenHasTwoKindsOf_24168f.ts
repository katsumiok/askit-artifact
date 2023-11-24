// Recompilation count: 1
export function belenHasTwoKindsOf_24168f({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
        // Belen has two kinds of pennies, a 'x1' penny and a 'x2' penny. The 'x3' penny is three-quarters of the weight of the 'x4' penny. If the 'x5' penny weighs 'x6' grains, what is the combined weight of the two pennies?
        const weightX4 = x6;
        const weightX3 = 0.75 * weightX4;
        
        let weightOfPennyX1 : number = 0;
        let weightOfPennyX2 : number = 0;

        if(x1 === x3){
            weightOfPennyX1 = weightX3;
        }
        else if(x1 === x4){
            weightOfPennyX1 = weightX4;
        }
        else if(x1 === x5){
            weightOfPennyX1 = x6;
        }

        if(x2 === x3){
            weightOfPennyX2 = weightX3;
        }
        else if(x2 === x4){
            weightOfPennyX2 = weightX4;
        }
        else if(x2 === x5){
            weightOfPennyX2 = x6;
        }

        return weightOfPennyX1 + weightOfPennyX2;
    }
