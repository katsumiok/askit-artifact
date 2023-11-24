// Recompilation count: 0
export function maryHasX1JarsOf_8c37f4({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Mary has 'x1' jars of sprinkles.
  // Each jar of sprinkles can decorate 'x2' cupcakes.
  // Mary wants to bake enough cupcakes to use up all of her sprinkles.
  // If each pan holds 'x3' cupcakes, how many pans worth of cupcakes should she bake?

  // First, Mary needs to find out how many cupcakes total she can decorate with all her jars of sprinkles.
  let totalCupcakes = x1 * x2;

  // Then, she divides this by the number of cupcakes that can fit in one pan to find out how many pans she'll need.
  // Math.ceil is used here to ensure that if part of a pan is needed, it counts as a whole pan (you cannot bake part of a pan of cupcakes).
  return Math.ceil(totalCupcakes / x3);
}
