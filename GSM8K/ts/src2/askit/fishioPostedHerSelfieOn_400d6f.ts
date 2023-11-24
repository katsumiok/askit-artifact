// Recompilation count: 0
export function fishioPostedHerSelfieOn_400d6f({ x1, x2, x3, x4 }: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
}): number {
        // Fishio posted her selfie on Instagram. She received 'x1' likes on the photo after 'x2' week.
        // Three weeks later, the number of likes was 'x3' times as many as the initial number of likes.
        // If she received 'x4' more new likes recently, how many Instagram likes are there?

        // After 'x2' weeks, she had 'x1' likes.
        let likesAfterX2Weeks = x1;

        // Three weeks later, the likes were 'x3' times the initial number of likes.
        let likesThreeWeeksLater = x1 * x3;

        // She received 'x4' more new likes recently.
        let newLikes = x4;

        // Total likes are the sum of these three variables.
        let totalLikes = likesAfterX2Weeks + likesThreeWeeksLater + newLikes;

        return totalLikes;
    }
