// Recompilation count: 0
export function inANeighborhoTheNumber_292fc3({}: {}): number {
        // In a neighborhood, the number of rabbits pets is twelve less than the combined number of pet dogs and cats. 
        // If there are two cats for every dog, and the number of dogs is 60, how many pets in total are in the neighborhood?

        let dogs = 60; // Number of dogs
        let cats = 2 * dogs; // cats are twice the number of dogs
        let rabbits = dogs + cats - 12; // Rabbits are twelve less than the combined number of dogs and cats
        
        let totalPets = dogs + cats + rabbits; // Total number of pets is sum of dogs, cats, and rabbits
       
        // returning total number of pets
        return totalPets;
    }
