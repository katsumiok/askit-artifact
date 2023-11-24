// Recompilation count: 0
export function candicePutX1PostIt_adeffa({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Candice put 'x1' post-it notes in her purse before she headed out to her job at the coffee shop.  
    // On her way, she stopped off at the store and purchased a package of Post-it notes;  
    // At work, she placed a single Post-it note on each of 'x2' different cups of coffee.  
    // If she had 'x3' post-it notes remaining overall, how many Post-it notes were in the package that she purchased?
    
    // Firstly, calculate how many post-it notes she used at work, which is 'x2'.
    // Then, calculate how many post-it notes she had initially, which is 'x1'.
    // Lastly, she had 'x3' post-it notes remaining overall.
    // The number of post-it notes in the package she purchased will be the sum of 'x2' and 'x3' minus 'x1':
    return x2 + x3 - x1;
}
