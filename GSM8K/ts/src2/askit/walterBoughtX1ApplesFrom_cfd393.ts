// Recompilation count: 0
export function walterBoughtX1ApplesFrom_cfd393({ x1 }: {
    x1: number;
}): number {
        // Walter bought 'x1' apples from the store. He ate 2/5 of them and gave his sister 25% of the remaining number. If he then sold the remaining apples to his uncle at $3 each, how much money did he receive?

        // Represent the percentage that Walter ate
        const atePercentage = 2 / 5;
        // Represent the percentage that Walter gave to his sister
        const sisterPercentage = 0.25;

        // Calculate the number of apples remaining after Walter ate some
        let remainingApples = x1 - (x1 * atePercentage);
        // Calculate the number of apples remaining after Walter gave some to his sister
        remainingApples = remainingApples - (remainingApples * sisterPercentage);

        // Calculate the amount of money Walter received by selling the remaining apples
        const moneyReceived = remainingApples * 3;

        return moneyReceived;
    }
