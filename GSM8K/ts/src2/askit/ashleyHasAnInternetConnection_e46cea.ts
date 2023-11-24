// Recompilation count: 0
export function ashleyHasAnInternetConnection_e46cea({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Ashley has an internet connection speed of 20kb per second. Knowing that 'x1' Mb has 'x2' kb, 
        // she wants to know her internet connection speed in Mb per hour. 
        // What is Ashley’s internet connection speed in Mb per hour?

        // Let's first calculate Ashley's internet speed in kb per hour.
        // There are 3600 seconds in an hour, so:
        const kbPerHour = 20 * 3600;

        // Now, we know that 'x1' Mb has 'x2' kb. So, number of Mb in 'kbPerHour' is:
        const mbPerHour = (kbPerHour / x2) * x1;

        // Return the speed in Mb per hour.
        return mbPerHour;
    }
