// Recompilation count: 0
export function marthaSCatIsX1_e2586f({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Martha's cat is 'x1' times faster than her turtle. If the cat can run 'x2' feet/second, how many feet can her turtle crawl in 'x3' seconds?
    // if cat's speed is 'x2' and it is 'x1' times faster than the turtle, then
    // turtle's speed = cat's speed / 'x1'
    // hence, distance covered by turtle in 'x3' seconds = turtle's speed * time
    return (x2 / x1) * x3;
}
