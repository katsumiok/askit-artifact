// Recompilation count: 0
export function aCertainCompanyIsIn_83e6be({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // A certain company is in the business of selling fresh fruit. One crate of such fruit consists of 'x1' bananas, 'x2' apples, and 'x3' oranges. The price for such a crate depends on the price of its individual fruits. One apple costs $0.5 and one banana costs twice as much. Oranges are the most expensive and cost three times as much as a banana per piece. What would be the price for such a crate of fruit?

    const applePrice = 0.5;
    const bananaPrice = applePrice * 2;
    const orangePrice = bananaPrice * 3;
    
    return (x1 * bananaPrice) + (x2 * applePrice) + (x3 * orangePrice);
}
