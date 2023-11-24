// Recompilation count: 2
export function digimonHadIts_20thAnniversar_6de1d6({ x1 }: {
    x1: number;
}): number {
        // Digimon had its 20th anniversary.  When it came out John was twice as old as Jim.  If John is 'x1' now how old is Jim?

    let johnsAgeWhenDigimonCameOut = x1 - 20;
    let jimsAgeWhenDigimonCameOut = johnsAgeWhenDigimonCameOut / 2;
    let jimsCurrentAge = jimsAgeWhenDigimonCameOut + 20;

    return jimsCurrentAge;
}
