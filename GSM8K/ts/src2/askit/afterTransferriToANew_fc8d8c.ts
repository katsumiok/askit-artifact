// Recompilation count: 0
export function afterTransferriToANew_fc8d8c({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // After transferring to a new school, Amy made 'x1' more friends than Lily. If Lily made 'x2' friends, how many friends do Lily and Amy have together?
        let amyFriends = x1 + x2; //Amy made 'x1' more friends than Lily, so Amy's total friends will be 'x1' + number of friends Lily made.
        let totalFriends = amyFriends + x2; // Total friends that Lily and Amy made together
        return totalFriends;
    }
