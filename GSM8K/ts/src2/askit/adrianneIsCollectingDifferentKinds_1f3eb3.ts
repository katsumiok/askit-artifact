// Recompilation count: 0
export function adrianneIsCollectingDifferentKinds_1f3eb3({ x1 }: {
    x1: number;
}): number {     
        let beadsFromMother = x1;
        let beadsFromSister = beadsFromMother + 10;
        let beadsFromFriend = beadsFromMother * 2;
        
        let totalBeads = beadsFromMother + beadsFromSister + beadsFromFriend;
        return totalBeads;
    }
