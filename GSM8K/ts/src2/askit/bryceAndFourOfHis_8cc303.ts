// Recompilation count: 0
export function bryceAndFourOfHis_8cc303({ x1 }: {
    x1: number;
}): number {
        // Bryce and four of his friends each ordered their own pizzas after football practice. Each pizza had 'x1' slices. Bryce and two friends ate 2/3 of their pizzas. The two remaining friends ate ¾ of their pizzas. How many slices of pizza were left?

    // Amount of pizza eaten by Bryce and two of his friends
    const bryceAndTwoFriendsEat = (x1 * 2/3) * 3;

    // Amount of pizza eaten by the other two friends
    const theRemainingTwoFriendsEat = (x1 * 3/4) * 2;
    
    // Total slices of pizza
    const totalPizza = x1 * 5

    // Leftover pizza
    var leftOverPizza = totalPizza - bryceAndTwoFriendsEat - theRemainingTwoFriendsEat;

    return leftOverPizza;
}
