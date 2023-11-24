// Recompilation count: 0
export function timDecidesToLightOff_fdd025({}: {}): number {
    // firework package prices
    const smallPackPrice: number = 400;
    const largePackPrice: number = smallPackPrice * 2;
    
    const discount: number = 0.2; // 20% discount
    
    const finaleFireworkPrice: number = 150; // cost of finale firework
    
    const totalWithoutDiscount: number = smallPackPrice + largePackPrice + finaleFireworkPrice;
    
    const discountAmount: number = (smallPackPrice + largePackPrice) * discount; 
    
    const totalWithDiscount: number = totalWithoutDiscount - discountAmount;
    
    return totalWithDiscount;
}
