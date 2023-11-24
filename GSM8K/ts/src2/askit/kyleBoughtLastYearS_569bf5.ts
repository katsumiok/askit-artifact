// Recompilation count: 0
export function kyleBoughtLastYearS_569bf5({}: {}): number {
    
      // Kyle bought last year's best-selling book for $19.50. This is with a 25% discount from the original price. What was the original price of the book?
      
      let discountedPrice: number = 19.50; // Price after discount.
      let discountRate: number = 0.25; // Discount rate.

      // Original price = Discounted price / (1 - discount rate)
      let originalPrice: number = discountedPrice / (1 - discountRate);

      return originalPrice;
}
