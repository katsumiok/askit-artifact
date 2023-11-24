// Recompilation count: 2
export function jeanIsTwoYearsOlder_70e059({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Jean is two years older than Mark.  
        // Two years ago Mark was 'x1' years older than half Jan's age.  
        // If Jan is 'x2' how old is Jean?
        // So, 2 years ago, Jean was x2 - 2.
        // Therefore, Mark's age two years ago was half of Jean's age plus x1
        // So, Mark's age now is this age plus 2
        let markAge = (x2 - 2) / 2 + x1 + 2;
        // Given that Jean is two years older than Mark, jeanAge = markAge + 2
        let jeanAge = markAge + 2;
        return jeanAge;
    }
