// Recompilation count: 0
export function sadieSleptX1HoursOn_5c1c82({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
  // Sadie slept 'x1' hours on Monday
  let mondaySleep = x1;

  // For the next two days, she slept 'x2' hours less each day
  let tuesdayWednesdaySleep = 2 * (x1 - x2);

  // If the rest of the week she slept 'x3' hour more than Tuesday and Wednesday
  let thursdayToSundaySleep = 4 * ((x1 - x2) + x3);

  // Total sleep hours throughout the week
  let weekSleep = mondaySleep + tuesdayWednesdaySleep + thursdayToSundaySleep;

  return weekSleep;
}
