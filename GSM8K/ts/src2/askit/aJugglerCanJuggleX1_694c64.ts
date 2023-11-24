// Recompilation count: 0
export function aJugglerCanJuggleX1_694c64({ x1 }: {
    x1: number;
}): number {
        // A juggler can juggle 'x1' balls.  
        // Half of the balls are golf balls, and half of the golf balls are blue.  
        // So we need half of half of 'x1', which means 'x1' divided by 4
        let blueGolfBalls = x1 / 4;
        
        return blueGolfBalls;
}
