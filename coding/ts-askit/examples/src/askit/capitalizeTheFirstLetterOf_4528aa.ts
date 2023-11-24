// Recompilation count: 0
export function capitalizeTheFirstLetterOf_4528aa({ s }: {
  s: string;
}): string {
  // Capitalize the first letter of each word in 's'.
  return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
