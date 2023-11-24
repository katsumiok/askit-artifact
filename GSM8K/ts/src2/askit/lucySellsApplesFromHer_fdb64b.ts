// Recompilation count: 0
export function lucySellsApplesFromHer_fdb64b({ x1 }: {
    x1: number;
}): number {
    // Lucy sells apples from her orchard at $4 per piece. 
    const pricePerApple = 4; 

    // If Lucy got $56 from selling the apples picked on Monday, calculate number of apples she picked
    const mondayApples = 56 / pricePerApple; 
    
    // On Tuesday, she picked 'x1' apples.
    const tuesdayApples = x1; 

    // Come Wednesday, Lucy picked double the number of apples she did the previous day
    const wednesdayApples =  2 * tuesdayApples; 

    // how many apples did she pick over the three days?
    const totalApples = mondayApples + tuesdayApples + wednesdayApples;
    return totalApples;   
}
