// Recompilation count: 2
export function togetherSofieAnneAndFawn_c04f9d({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Together, Sofie, Anne, and Fawn have 'x1' books. 
    // If Sofie has 'x2' more books than Anne, and Anne has 'x3' fewer books than Fawn does,
    // how many books does Fawn have?

    // Let's denote:
    // F - number of books Fawn has
    // A - number of books Anne has
    // S - number of books Sofie has

    // From the problem we have the following equations:
    // F + A + S = x1     (1)
    // S = A + x2         (2)
    // F = A + x3         (3)

    // We can replace S and F in the first equation using the second and third equations respectively.
    // This gives us:
    // A + x3 + A + A + x2 = x1
    // 3 * A + x2 + x3 = x1
    // A = (x1 - x2 - x3) / 3
    
    // Then we substitute A from above into F = A + x3 to get:
    // F = ((x1 - x2 - x3) / 3) + x3

    let A = (x1 - x2 - x3) / 3;
    let F = A + x3;

    return F;
}
