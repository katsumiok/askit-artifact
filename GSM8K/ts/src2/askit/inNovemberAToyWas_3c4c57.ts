// Recompilation count: 0
export function inNovemberAToyWas_3c4c57({}: {}): number {
        // In November, a toy was $40. 
        let initialPrice: number = 40;
        // In December, the price increased by 80%. 
        let decemberPrice: number = initialPrice + (initialPrice * 0.8);
        // In January, the price decreased by 50%. 
        let januaryPrice: number = decemberPrice - (decemberPrice * 0.5);
        
        // What was the price of the toy after it was discounted in January?
        return januaryPrice;
    }
