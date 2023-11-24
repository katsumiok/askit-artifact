// Recompilation count: 1
export function jeromeHadX1FriendsWho_dc4718({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        const firstFriend = x2; 
        const secondFriend = x2 + (x2 / 4);
        const fourthFriend = x4;
        const thirdFriend = x4 + x3;
        
        const totalDoorbellRings = firstFriend + secondFriend + thirdFriend + fourthFriend;
        
        return totalDoorbellRings;
}
