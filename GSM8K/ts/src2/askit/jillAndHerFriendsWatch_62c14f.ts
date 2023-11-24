// Recompilation count: 0
export function jillAndHerFriendsWatch_62c14f({ x1, x2 }: {
    x1: number;
    x2: number;
}): number {
        // Jill and her friends watch 'x1' movies every Saturday and half the number of movies on Sunday than on Saturday.
        // If they watch movies every weekend, how many movies can they watch in 'x2' weeks?

        // calculate the number of movies watched on Sunday
        let sundayMovies = x1 / 2;
        
        // calculate the number of movies watched in a week
        let weeklyMovies = x1 + sundayMovies;
        
        // calculate the total number of movies watched in 'x2' weeks
        return weeklyMovies * x2;
    }
