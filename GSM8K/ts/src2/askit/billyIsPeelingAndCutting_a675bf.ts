// Recompilation count: 0
export function billyIsPeelingAndCutting_a675bf({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Billy is peeling and cutting potatoes in preparation for making potato salad for his big family reunion barbecue. It's a big event, so he has 'x1' potatoes to get through. The potatoes are roughly the same size, so it takes about the same amount of time to peel and cut each one. It takes Billy about a minute and a half to peel a potato, but only about 'x2' seconds to cut it up. How long will it take Billy to finish prepping the potatoes?
        // convert minute and a half to seconds
        let peelTimeInSeconds = 1.5 * 60;
        // calculate total peeling and cutting time
        let totalPrepTime = x1 * (peelTimeInSeconds + x2);
        // convert the time back to minutes
        let timeInMinutes = totalPrepTime / 60; 
        // return the total time 
        return timeInMinutes;
    }
