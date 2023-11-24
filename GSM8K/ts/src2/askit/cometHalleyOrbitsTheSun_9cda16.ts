// Recompilation count: 0
export function cometHalleyOrbitsTheSun_9cda16({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Comet Halley orbits the sun every 'x1' years. Bill's dad saw the Comet when he was 'x2' years old. 
        // Bill saw the comet a second time when he was three times the age his father was when he saw the Comet. 
        // How old was Bill when he saw the Comet for the first time?
       
        // The first time Bill saw the comet, he must have been as old as his father was when his father first saw it.
        // Given that the comet orbits the sun every 'x1' years, and considering that Bill saw the comet for the second 
        // time when he was three times the age his father was when his father first saw the comet, Bill's age when he 
        // first saw the comet can be found by subtracting 'x1' from three times 'x2'.
        
        let billFirstSightingAge = (3 * x2) - x1;
        return billFirstSightingAge;
    }
