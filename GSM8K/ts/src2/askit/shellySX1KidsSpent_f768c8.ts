// Recompilation count: 0
export function shellySX1KidsSpent_f768c8({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Shelly's 'x1' kids spent all day at the water park.  Mitchel went down the water slide 'x2' times.  
        // Anne went down the slide 30% less than Mitchel and Robert went down 'x3' times as much as Anne.  
        // How many times did Robert go down the water slide?

        // Calculate how many times Anne went down the slide
        const anneSlideTimes = x2 - (x2 * 0.30); 
        
        // Calculate how many times Robert went down the slide
        const robertSlideTimes = anneSlideTimes * x3; 

        return robertSlideTimes;
    }
