// Recompilation count: 0
export function finnWatchesX1TadpolesSwimming_4fb407({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
        // Finn watches 'x1' tadpoles swimming in the pond.  
        // Suddenly he sees 'x2' of them come out of hiding from under a lily pad, then
        // he sees 'x3' of them hide under a rock.  
        // How many tadpoles can Finn see in the pond now?
        
        // x1 was initially present, x2 came out and x3 hid. So simple mathematics is (x1 + x2) - x3
        return (x1 + x2) - x3;
    }
