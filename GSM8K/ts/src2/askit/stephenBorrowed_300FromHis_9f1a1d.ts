// Recompilation count: 0
export function stephenBorrowed_300FromHis_9f1a1d({ x1 }: {
    x1: number;
}): number {
        let totalAmount = 300 + 300 * 0.02; // total amount including 2% interest on $300
        let givenAmount = 25 * x1; // total amount Stephen gives his sister in 'x1' months
        let remaining = totalAmount - givenAmount; // remaining amount that needs to be given
        
        // Since the remaining payment is to be made in the 12th month, if 'x1' is less than 12 
        // then remaining amount will be same as calculated, 
        // else if 'x1' is 12 or more than 12 Stephen has to pay $25 as he is paying every month.
        let amountInTwelvethMonth = x1 < 12 ? remaining : 25; 

        return amountInTwelvethMonth; 
    }
