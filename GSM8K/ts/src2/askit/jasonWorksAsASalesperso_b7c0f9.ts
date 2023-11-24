// Recompilation count: 0
export function jasonWorksAsASalesperso_b7c0f9({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // We can calculate this by going backward from the goal. We need 'x3' cars sold.
        // Every 2 customers buys a car, so we need 'x3' * 2 customers.
        // 'x2' calls gets 1 customer in, so we need 'x3' * 2 * 'x2' calls.

        return x3 * 2 * x2;
    }
