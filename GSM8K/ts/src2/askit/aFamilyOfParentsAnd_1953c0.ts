// Recompilation count: 0
export function aFamilyOfParentsAnd_1953c0({ x1 }: {
    x1: number;
}): number {
        // A family of parents and a child go to the cinema. The cost of an adult ticket is $12 and a child ticket is $8. Then they buy 'x1' popcorns for $3 each. How many dollars do they pay in total?
        const costOfAdultTicket = 12 * 2; // 2 adults
        const costOfChildTicket = 8;
        const costOfPopcorns = x1 * 3;

        return costOfAdultTicket + costOfChildTicket + costOfPopcorns;
    } 
