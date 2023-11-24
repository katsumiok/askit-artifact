// Recompilation count: 0
export function theSmithFamilyIsGetting_b2392d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // The Smith family is getting ready for summer and needs to have their swimming pool filled. 
    // The pool company instructed them to measure to find the volume of the pool, 
    // then to multiply it by 5.9 to calculate how many gallons of water they need. 
    // The cost for the pool company to come and fill the pool is $0.10 per gallon. 
    // Mr. Smith measured and found the pool is 'x1' feet wide, 'x2' feet long, and 'x3' feet deep. 
    // How much will it cost to fill the pool?

    //Calculate the volume of the pool.
    let volume = x1 * x2 * x3;

    //Calculate how many gallons of water they need.
    let gallons = volume * 5.9;
    
    //The cost for the pool company to come and fill the pool.
    let cost = gallons * 0.10;
    
    return cost;
}
