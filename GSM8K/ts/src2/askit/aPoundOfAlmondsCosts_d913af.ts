// Recompilation count: 0
export function aPoundOfAlmondsCosts_d913af({}: {}): number {
    const aPoundOfAlmonds = 10;
    const aPoundOfWalnuts = 15;
    const mixture1Cost = (aPoundOfAlmonds * (1/2)) + (aPoundOfWalnuts * (1/3));
    const mixture2Cost = (aPoundOfAlmonds * (1/5)) + (aPoundOfWalnuts * (1/3));
    return mixture1Cost - mixture2Cost;
}
