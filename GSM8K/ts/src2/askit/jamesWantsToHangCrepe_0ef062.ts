// Recompilation count: 0
export function jamesWantsToHangCrepe_0ef062({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
  // To cover all the sides of the fence, he'll need the total perimeter of it.
  // Since it's a rectangle, the formula for the perimeter is 2*(length + width).
  // In this case, x1 is the long side (length) and x2 is the short side (width), so 2*(x1 + x2).
  return 2 * (x1 + x2);
}
