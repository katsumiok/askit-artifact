// Recompilation count: 0
export function jamesIsInChargeOf_e66741({ x1 }: {
    x1: number;
}): number {
        // James is in charge of running messages from the office to each teacher's classroom. If he delivers 'x1' messages to Ms. Thompson and 1/3 as many messages to Mr. Yu, how many messages does he deliver total?
    let messagesToMrYu = x1 / 3;
    let totalMessages = x1 + messagesToMrYu;

    return totalMessages;
}
