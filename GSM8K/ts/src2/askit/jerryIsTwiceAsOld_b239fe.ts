// Recompilation count: 0
export function jerryIsTwiceAsOld_b239fe({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Jerry is twice as old as he was 'x1' years ago. This implies Jerry is 'x1' * 2 years old now.
        let currentAge: number = x1 * 2;
        
        // In 'x2' years, Jerry will be 'currentAge' + 'x2' years old.
        let futureAge: number = currentAge + x2;

        return futureAge;
    }
