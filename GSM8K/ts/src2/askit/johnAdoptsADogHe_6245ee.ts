// Recompilation count: 0
export function johnAdoptsADogHe_6245ee({}: {}): number {
    // John adopts a dog.  He takes the dog to the groomer, which costs $100.  
    // The groomer offers him a 30% discount for being a new customer.  How much does the grooming cost?
    const originalCost = 100;
    const discountRate = 0.30;
    const discountedCost = originalCost * (1 - discountRate);
    return discountedCost;
}
