// Recompilation count: 0
export function katarinaHasX1LessCookies_64f3cf({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // Katarina has 'x1' less cookies than Max has. Max has 'x2' more cookies than the Cookie Monster, 
    // and Summer has 'x3' more cookies than Max. If Katarina has 'x4' cookies, how many cookies do they have in total?

    const katarina = x4;
    const max = x4 + x1;
    const cookieMonster = max - x2;
    const summer = max + x3;

    return katarina + max + cookieMonster + summer;
}
