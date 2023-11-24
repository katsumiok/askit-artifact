// Recompilation count: 0
export function checkIfSIsA_be34ef({ s }: { s: string }): boolean {
  // Check if 's' is a valid URL.
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(s);
}
