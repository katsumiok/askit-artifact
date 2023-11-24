// Recompilation count: 0
export function paulIsDrivingACar_226b33({ x1 }: {
    x1: number;
}): number {
        // Paul is driving a car twice a day: in the morning, and in the afternoon. 
        // He did that for 'x1' days. Each morning ride cost him about $6, and each 
        // afternoon ride, about $2. 
        // How much money did he spend on driving his car during these 'x1' days?
        return x1 * (6 + 2); // $6 for morning ride and $2 for afternoon ride hence (6 + 2) * number of days
    }
