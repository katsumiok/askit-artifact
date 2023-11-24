// Recompilation count: 0
export function johnJustStartedWatchingA_e3ee34({ x1 }: {
    x1: number;
}): number {
        // John just started watching a new show. Each episode is 'x1' minutes long, 
        // and there are half as many episodes in total as there are minutes per episode. 
        // How many minutes will John spend watching the show if he watches every episode?
        
        let totalEpisodes = x1 / 2; // There are half as many episodes in total as there are minutes per episode
        let totalMinutes = totalEpisodes * x1; // Total minutes = total episodes * minutes per episode
        
        return totalMinutes;
    }
