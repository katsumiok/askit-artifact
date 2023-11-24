// Recompilation count: 0
export function theGleeClubOrderedX1_41a04a({ x1 }: {
    x1: number;
}): number {
    // The glee club ordered 'x1' pizzas and ate 70% of them.
    const gleeClubPizzasEaten = x1 * 0.7;
    const gleeClubPizzasLeft = x1 - gleeClubPizzasEaten;

    // The football team ordered twice as many pizzas and ate 80% of them.
    const footballTeamOrdered = x1 * 2;
    const footballTeamPizzasEaten = footballTeamOrdered * 0.8;
    const footballTeamPizzasLeft = footballTeamOrdered - footballTeamPizzasEaten;
    
    // Returns total pizzas left
    return gleeClubPizzasLeft + footballTeamPizzasLeft;
}
