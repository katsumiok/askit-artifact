// Recompilation count: 0
export function bobIsInChargeOf_08c7a7({ x1 }: { x1: number }): number {
  // For each room:
  //   Sheets = 2
  //   Comforter = 1
  //   Pillow Case = 2 * Sheets = 4
  //   Towel = 2 * Pillow Case = 8
  // Total pieces of laundry per room = 2 + 1 + 4 + 8 = 15
  return x1 * 15;
}
