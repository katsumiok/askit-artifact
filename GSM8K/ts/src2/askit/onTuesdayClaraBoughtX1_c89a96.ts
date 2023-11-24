// Recompilation count: 0
export function onTuesdayClaraBoughtX1_c89a96({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
    // On Tuesday, Clara bought 'x1' pomegranates at $20 each. At the till she got $2 off because she had a voucher.
    let tuesdayTotal = (x1 * 20) - 2;

    // The next day, the price shot to $30 per fruit, but the store also offered a 10% discount on the total cost. 
    // Sheila took advantage of the discount and bought 'x2' pomegranates.
    let wednesdayTotal = (x2 * 30) * 0.9;
    
    // What is the difference between the final prices paid for the pomegranates on the two days?
    let difference = Math.abs(tuesdayTotal - wednesdayTotal);
    
    return difference;
}
