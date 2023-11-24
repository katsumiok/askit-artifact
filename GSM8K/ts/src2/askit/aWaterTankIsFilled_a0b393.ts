// Recompilation count: 0
export function aWaterTankIsFilled_a0b393({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // A water tank is filled with 'x1' liters of water. Celine used 'x2' liters of water from the tank to water her small garden. 
		// She was then able to collect rainwater that is twice as much as what was left. How many liters of water are in the tank now?
    let remainingWaterAfterWatering = x1 - x2;
    let rainwaterCollected = remainingWaterAfterWatering * 2;
    
    let totalWaterInTank = remainingWaterAfterWatering + rainwaterCollected;
    return totalWaterInTank;
    }
