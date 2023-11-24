// Recompilation count: 0
export function carlaIsDownloadinAX1_991383({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Carla is downloading a 'x1' GB file. Normally she can download 'x2' GB/minute, but 40% of the way through the download, Windows forces a restart to install updates, which takes 'x3' minutes. Then Carla has to restart the download from the beginning. How long does it take to download the file?

    // First, find the time it takes Carla to download 40% of the file
    let timeTo40Percent = (x1 * 0.4) / x2;

    // Then, add the time for the Windows restart
    let timeForRestart = x3;

    // Finally, add the time it takes to download the entire file
    let timeToDownloadEntireFile = x1 / x2;

    // The total time is the sum of these three times
    let totalTime = timeTo40Percent + timeForRestart + timeToDownloadEntireFile;
    
    return totalTime;
}
