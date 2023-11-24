// Recompilation count: 0
export function johnDecidesToTakeUp_1e78d6({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // John decides to take up an odd hobby of speed talking.  His normally speaking speed is 'x1' WPM.  After training his speed is 2.5 times faster than his starting speed.  How long would it take him to speak 'x2' pages if each page has 'x3' words per page?
        let startingSpeed = x1;
        let increasedSpeed = startingSpeed * 2.5;
        let totalWords = x2 * x3;
      
        // The time (in minutes) it would take him to speak 'totalWords' at increased speed.
        let timeToSpeak = totalWords / increasedSpeed;
      
        return timeToSpeak;
    }
