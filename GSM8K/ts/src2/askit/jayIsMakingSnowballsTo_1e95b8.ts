// Recompilation count: 0
export function jayIsMakingSnowballsTo_1e95b8({ x1, x2, x3, x4 }: {x1: number; x2: number; x3: number; x4: number;}): number {
    // Jay is making snowballs to prepare for a snowball fight with his sister. He can build 'x1' snowballs in an hour, but 'x2' melt every 'x3' minutes. How long will it take before he has 'x4' snowballs?

    // Snowballs made in one minute
    const snowballsPerMinute = x1 / 60;

    // Snowballs that melt every minute
    const meltPerMinute = x2 / x3;

    // Net snowballs made in one minute
    const netSnowballsPerMinute = snowballsPerMinute - meltPerMinute;

    // Time taken to make 'x4' snowballs in hours
    if(netSnowballsPerMinute > 0) {
      return x4 / (netSnowballsPerMinute * 60);
    } else {
      // If the number of snowballs made per minute is less than or equal to the number that melt, he will never reach his target
      return -1;
    }
}
