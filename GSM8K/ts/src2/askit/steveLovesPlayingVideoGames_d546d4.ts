// Recompilation count: 0
export function steveLovesPlayingVideoGames_d546d4({ x1, x2, x3, x4, x5, x6 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    x5: number;
    x6: number;
}): number {
    // Initialize with birthday gift
    let totalGames = x1; 
    for (let i = 1; i <= x6; i++) { 
        // Add Christmas gifts
        totalGames += x5;
        // Add games bought with saved money or part-time job
        if (i === 1) { 
            totalGames += 12 * x2; 
        } else if (i === 2) { 
            totalGames += 12 * x3; 
        } else {
            totalGames += 12 * x4; 
        }
    }
    return totalGames;
}

