// Recompilation count: 0
export function lindsayIsDoingTheLaundry_4f596c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Lindsay is doing the laundry, and thinks she has missed some socks. There are 'x1' socks that need washing. If she washes 'x2' pairs of socks and 'x3' loose socks, how many socks has Lindsay missed?
  // 'x2' indicates pairs of socks, hence there are 'x2' * 2 socks. 'x3' are already single socks.
  let totalSocksWashed = (x2 * 2) + x3;

  // The socks that were missed are 'x1' total socks minus the socks that were washed.
  return x1 - totalSocksWashed;
}
