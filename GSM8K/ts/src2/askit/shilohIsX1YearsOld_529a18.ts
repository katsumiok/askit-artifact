// Recompilation count: 0
export function shilohIsX1YearsOld_529a18({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Shiloh is 'x1' years old today.  In 'x2' years, he will be three times as old as his nephew.  How old is his nephew today?
        // In 'x2' years, Shiloh will be 'x1 + x2' years old.
        // At that time Shiloh's age will be three times the nephew's age, so the nephew's age will be "'x1 + x2' / 3".
        // But that's the nephew's age in 'x2' years, so his current age is "'x1 + x2' / 3 - x2".
        return (x1 + x2) / 3 - x2;
}
