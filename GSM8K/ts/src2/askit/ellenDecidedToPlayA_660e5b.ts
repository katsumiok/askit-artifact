// Recompilation count: 1
export function ellenDecidedToPlayA_660e5b({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number {
        // Ellen decided to play a prank on her friend. She got a case of 'x1' sodas and shook 'x2' of them up. Then she took 'x3' unshaken soda for herself and left. Ellen's brother stopped by and took 'x4' of the shaken sodas and 'x5' of the unshaken sodas, then Ellen's friend came along. 

        //What is the likelihood, expressed as a percentage, that Ellen's friend gets sprayed with soda from a shaken can?

        // Calculate the remaining shaken sodas after Ellen's brother took 'x4' of them
        let remainingShaken = x2 - x4;

        // Calculate the total number of remaining sodas after Ellen and her brother's actions
        let totalRemainingSodas = x1 - x3 - x4 - x5;

        // Calculate the probability that Ellen's friend gets a shaken soda, expressed as a percentage
        let probability = (remainingShaken / totalRemainingSodas) * 100;

        return probability;
}
