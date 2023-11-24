// Recompilation count: 0
export function formatTheNumberNAs_8ecec2({ n }: { n: number }): string {
  // Format the number 'n' as a currency.
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
