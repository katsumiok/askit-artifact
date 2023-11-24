// Recompilation count: 0
export function johnHadASonJames_38dd35({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // John was 19 years old when James was born.
        // Dora will be 'x1' years old in 'x2' years, meaning she is currently 'x1 - x2' years old.
        // Because James is twice as old as Dora, he is currently '2 * (x1 - x2)' years old.
        // Therefore, John is '19 + 2 * (x1 - x2)' years old now.
        // John's youngest son, who was born when John was 32, is therefore '19 + 2 * (x1 - x2) - 32' years old now.
        // In 'x3' years, John's youngest son will be '19 + 2 * (x1 - x2) - 32 + x3' years old.
        return 19 + 2 * (x1 - x2) - 32 + x3;
    }
