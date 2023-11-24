// Recompilation count: 0
export function aidenIsMakingHisFamous_cb0e51({ x1 }: {
    x1: number;
}): number {
    // Number of pounds of ground beef needed for 'x1' meatballs.
    const poundsOfMeat = x1 / 16;

    // Amount of seasoning (in tablespoon) needed for each pound of ground beef.
    const tablespoonsOfSeasoning = 2;

    // Total amount of seasoning needed for 'x1' meatballs.
    const totalSeasoning = poundsOfMeat * tablespoonsOfSeasoning;

    return totalSeasoning;
}
