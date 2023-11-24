// Recompilation count: 0
export function jaimePlacesEggsOnThe_4e0419({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Jaime places eggs on the tray. Each tray can hold 'x1' eggs. If he has 'x2' eggs and 'x3' trays, how many eggs won't he be able to place on the tray?
    let totalEggsThatCanBePlaced = x1 * x3;
    let leftoverEggs = x2 - totalEggsThatCanBePlaced;
    return leftoverEggs < 0 ? 0 : leftoverEggs;
}
