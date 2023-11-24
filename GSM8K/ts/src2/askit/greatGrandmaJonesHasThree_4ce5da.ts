// Recompilation count: 1
export function greatGrandmaJonesHasThree_4ce5da({}: {}): number {
    // To get the number of great grand-babies, we need to multiply the number of children by the number of grandchildren per child and then by the number of great grand-babies per grandchild.
    // As per the given scenario, Great Grandma Jones has 3 children, each of her children has 3 children of their own, and each of these grandchildren has 3 babies of their own. Therefore, we need to multiply 3 by 3 and again by 3.
    
    const numberOfChildren = 3;
    const numberOfGrandchildrenPerChild = 3;
    const numberOfGreatGrandchildrenPerGrandchild = 3;

    return numberOfChildren * numberOfGrandchildrenPerChild * numberOfGreatGrandchildrenPerGrandchild;
}
