// Recompilation count: 1
export function juliaSBoatSprangA_f1df4a({ x1 }: { x1: number; }): number {
    // Julia’s boat was taking on two liters of water for every ten feet she rowed.
    // It took her sixteen seconds to row twenty feet. So she rows twenty feet in sixteen seconds. 
    let twentyFeetRowingTime = 16;

    // So, she rows 1 feet in sixteen/20=0.8 seconds 
    let oneFeetRowingTime = twentyFeetRowingTime / 20;

    // If shore was 'x1' seconds away. Then,
    // Total feet she rows = x1/oneFeetRowingTime 
    let totalFeetRowedToShore = x1 / oneFeetRowingTime;

    // As boat takes 2 litre water for every ten feet,
    // Total water taken when she reached shore = (totalFeetRowedToShore / 10 ) * 2
    let totalWaterTaken = (totalFeetRowedToShore / 10) * 2;

    return totalWaterTaken;
}
