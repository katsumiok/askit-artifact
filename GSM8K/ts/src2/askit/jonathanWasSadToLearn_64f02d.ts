// Recompilation count: 0
export function jonathanWasSadToLearn_64f02d({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Jonathan was sad to learn he needed 'x1' more toys than he already had to have enough toys to make a sorted play set five times larger than James's play set, which had 'x2' toys. How many toys does Jonathan currently have?

        // From the problem description, we know that Jonathan's playset will be five times larger than James' playset after adding x1 more toys. That means:
        // Jonathan's_current_toys + x1 = 5 * James'_toys
        let jonathan_current_toys = (5 * x2) - x1;
        
        // Return the number of toys Jonathan currently has
        return jonathan_current_toys;
    }
