// Recompilation count: 0
export function eachClassInASchool_33ee13({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Each class in a school has 'x1' students. There are 'x2' classes. The school as a whole is 50% boys and 50% girls. 
        // So the total number of boys in the school will be (x1 * x2) / 2
        let totalBoys = x1 * x2 / 2;
        // The first class has 'x3' girls. The second class has 'x4' girls. Each class has x1 students
        // So in first two classes, the number of boys are (x1 - x3) and (x1 - x4) respectively. 
        let boysInFirstTwoClass = (x1 - x3) + (x1 - x4);
        
        // Assuming that the rest of the classes have a 50/50 split of boys and girls except third class
        // So the number of boys in third class will be the difference between total boys and boys in first two classes
        let boysInThirdClass = totalBoys - boysInFirstTwoClass - ((x2 - 3) * (x1 / 2));
        return boysInThirdClass;
    }
