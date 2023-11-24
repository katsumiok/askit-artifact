// Recompilation count: 0
export function britanyRecordsX1_4Minute_90299c({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Britany records 'x1' 4-minute TikTok videos each week. 
    // She spends 'x2' hours a week writing amateur songs to sing on TikTok, 
    // and 'x3' minutes six days a week doing her makeup before filming herself for TikTok. 
    let timeSpentOnVideos = x1 * 4 * 4; // time in minutes for making videos in a month
    let timeSpentOnSongs = x2 * 60 * 4; // converting hours into minutes for a month
    let timeSpentOnMakeup = x3 * 6 * 4; // time in minutes for doing makeup in a month

    // Total time spent on TikTok in a month
    let totalTime = timeSpentOnVideos + timeSpentOnSongs + timeSpentOnMakeup ;

    return totalTime; // time in minutes
}
