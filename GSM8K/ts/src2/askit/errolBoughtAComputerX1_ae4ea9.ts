// Recompilation count: 0
export function errolBoughtAComputerX1_ae4ea9({ x1 }: {
    x1: number;
}): number {
        // Errol bought a computer, 'x1' monitors, and a printer for $2,400. He paid $400 less for the printer than the computer. If the computer cost $1,100, how much did one monitor cost, in dollars?
        
        const computerCost = 1100;
        const totalCost = 2400;
        const printerCost = computerCost - 400;
        const monitorsCost = totalCost - (computerCost + printerCost);
        const oneMonitorCost = monitorsCost / x1;

        return oneMonitorCost;
    }
