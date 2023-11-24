// Recompilation count: 0
export function henryAndX1OfHis_31658b({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Henry and 'x1' of his friends order 'x2' pizzas for lunch. Each pizza is cut into 'x3' slices. If Henry and his friends want to share the pizzas equally, how many slices can each of them have?
        // Total number of people is Henry (1) plus his 'x1' friends
        let totalPeople = 1 + x1;

        // Total number of pizza slices is 'x2' pizzas times 'x3' slices each
        let totalSlices = x2 * x3;

        // Each person can have an equal number of slices, which is the total slices divided by total people
        // We use Math.floor to get the integer part of the result, as each person can only have a whole number of slices
        return Math.floor(totalSlices / totalPeople);

    }
