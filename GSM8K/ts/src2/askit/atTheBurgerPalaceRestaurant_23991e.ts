// Recompilation count: 0
export function atTheBurgerPalaceRestaurant_23991e({ x1 }: { x1: number }): number {
    // According to the problem, we can see that the total number of jelly beans in the jar (x1) is made up of
    // blue jelly beans (b), red jelly beans (r = b - 0.01b = 0.99b) and green jelly beans (g = b + 0.01b = 1.01b).
    // So, we can find the total number of jelly beans as follows: x1 = b + 0.99b + 1.01b = 3b;
    // And so, the number of blue jelly beans b = x1 / 3.
    // Then, the difference between the green and red jelly beans would be g - r = 1.01b - 0.99b = 0.02b

    let b = x1 / 3;
    let difference = 0.02 * b;

    return Math.round(difference);
}
