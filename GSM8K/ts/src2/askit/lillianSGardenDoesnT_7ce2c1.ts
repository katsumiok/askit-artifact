// Recompilation count: 0
export function lillianSGardenDoesnT_7ce2c1({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Lillian's garden doesn't have any bird feeders in it so she wants to add some. She builds 'x1' and buys 'x2' 
        // others. Each bird feeder seems to attract 'x3' birds throughout the day until Lillian notices that the birds 
        // seem to prefer the feeders she made herself which attract 'x4' more birds each than the store-bought ones. 
        // How many birds can Lillian expect to see in her garden each day if the same amount keep coming to her bird feeders?
        
        // calculate the total number of birds which are attracted by the bird feeders that Lillian made 
        let birdsFromHomeMadeFeeders = x1 * (x3 + x4);
        
        // calculate the total number of birds which are attracted by the bird feeders that Lillian bought 
        let birdsFromStoreBoughtFeeders = x2 * x3;
        
        // total number of birds each day
        let totalBirds = birdsFromHomeMadeFeeders + birdsFromStoreBoughtFeeders;
        
        return totalBirds;
    }
