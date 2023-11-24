// Recompilation count: 0
export function thereAreX1PlantsIn_afa1ba({ x1 }: {
    x1: number;
}): number {
        // There are 'x1' plants in Mrs. Smith's garden. 
        // One-fourth of her plants are indoor plants. 
        let indoorPlants = x1 / 4;

        // Two-thirds of the remaining are outdoor plants 
        let remainingPlants = x1 - indoorPlants;
        let outdoorPlants = (2 / 3) * remainingPlants;

        // the rest are flowering plants. 
        let floweringPlants = remainingPlants - outdoorPlants;

        // What percent of the plants are flowering plants?
        let percentageOfFloweringPlants = (floweringPlants / x1) * 100;

        return percentageOfFloweringPlants;
    }
