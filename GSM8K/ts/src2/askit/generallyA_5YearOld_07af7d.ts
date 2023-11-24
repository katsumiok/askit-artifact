// Recompilation count: 0
export function generallyA_5YearOld_07af7d({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // Firstly, check if 'x6' years is less than 5, because the tree starts producing from 5 years
    if(x6 < 5){
        return 0;
    }
    
    let totalFruits = 0;
    
    // For the first 5 years
    if(x6 >= 5){
        totalFruits += x1;
    }
    // For 6th year
    if(x6 >= 6) {
        totalFruits += x1 * x2;
    }
    // For 7th year
    if(x6 >= 7) {
        totalFruits += x1 * x3;
    }
    // For 8th year
    if(x6 >= 8){
        totalFruits += (x1 * x5 - x4);
    }
    // There are no fruits in 9th year
    // For 10th year
    if(x6 >= 10){
        totalFruits += x1 * x5;
    }
    // For years after 10 years, the tree will produce 'x5' times the initial amount of fruits each year
    if(x6 > 10){
        totalFruits += (x6 - 10) * x1 * x5;
    }
    
    return totalFruits;
}
