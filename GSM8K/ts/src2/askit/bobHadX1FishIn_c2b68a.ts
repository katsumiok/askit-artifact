// Recompilation count: 0
export function bobHadX1FishIn_c2b68a({ x1, x2, x3, x4 }: {
    x1: number;  // Total number of fish Bob initially had
    x2: number;  // Number of orange fish Bob initially had
    x3: number;  // Number of white fish Bob initially had
    x4: number;  // Number of added fishes from store
}): number | string { 
    // Total fishes after Bob bought from the store
    let totalFish = x1 + x4; 
    // As given, after buying the fishes Bob has twice as many orange fish as white,
    // we can represent it as - 2 * totalWhiteFish = totalOrangeFish
    let totalWhiteFish = totalFish / 3; 
    let totalOrangeFish = 2 * totalWhiteFish;
    try {
        // Number of white fishes Bob bought at the store
        return totalWhiteFish - x3;
    }  catch (err) {
        return "Input values do not lead to a valid conclusion.";
    }
}
