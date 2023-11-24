// Recompilation count: 0
export function theZookeeperFeedsAllThe_a8f3a1({ x1, x2, x3, x4, x5 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
}): number{
        // The zookeeper feeds all the apes in the zoo. He orders all the bananas from a local farm every 'x1' months. If the monkeys need 'x2' bananas, the gorillas need 'x3' bananas, and the baboons need 'x4' bananas every month, how many bananas does he need to order to last for 'x5' months?
        let totalBananasNeededPerMonth = x2 + x3 + x4; // total bananas needed per month by all apes
        let totalBananasNeeded = totalBananasNeededPerMonth * x5; // total bananas needed for 'x5' months
        return totalBananasNeeded;
     }
