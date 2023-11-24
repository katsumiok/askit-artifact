// Recompilation count: 0
export function twoCandidatesAreRunningFor_ca5683(): number {
    
    var total_votes : number = 80; // Total number of votes casted 
    var winner_votes_fraction : number = 3/4; // The fraction of votes the winner got.
    
    var winner_votes : number = total_votes * winner_votes_fraction; // Total votes won by the winner 
    var loser_votes : number  = total_votes - winner_votes ; // Total votes won by loser
    
    return loser_votes;
    
}
