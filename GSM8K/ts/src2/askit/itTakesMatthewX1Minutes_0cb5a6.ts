// Recompilation count: 0
export function itTakesMatthewX1Minutes_0cb5a6({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
    // It takes Matthew 'x1' minutes to dig a small hole for shrubs and 'x2' minutes to dig a large hole for trees.  
    // How many hours will it take him to dig 'x3' small holes and 'x4' large holes?
    const smallHolesTime = x1 * x3;
    const largeHolesTime = x2 * x4;
    const totalMinutes = smallHolesTime + largeHolesTime;

    // Convert minutes to hours
    const totalHours = totalMinutes / 60;

    return totalHours;
}
