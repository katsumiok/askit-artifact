// Recompilation count: 0
export function carsonLivesInAnOld_3b7e9a({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Calculate the night temperature
        let nightTemperature = x3 - x4;
        // Calculate the difference between minimum required temperature and night temperature
        let difference = x1 - nightTemperature;

        if (difference <= 0) {
            // No need to burn any log
            return 0;
        } else {
            // Calculate number of logs required to burn
            return Math.ceil(difference / x2);
        }
    }
