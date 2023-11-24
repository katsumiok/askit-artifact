// Recompilation count: 0
export function checkIfSIsA_c7b966({ s }: { s: string }): boolean {
  // Check if 's' is a valid email address.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(s);
}
