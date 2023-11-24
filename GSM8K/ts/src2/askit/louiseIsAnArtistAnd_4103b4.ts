// Recompilation count: 0
export function louiseIsAnArtistAnd_4103b4({ x1, x2, x3 }: {
    x1: number;
    x2: number;
    x3: number;
}): number {
    // Louise is an artist and needs to apply a coat of varnish to her latest paintings. Usually it takes 'x1' minutes for the coat of varnish to dry on one painting. However, today she is using a new varnish and it takes 'x2' minutes for the coat to dry. How much longer will it take for the coat of varnish on 'x3' paintings with the new varnish to dry as it would with the old varnish?
    let oldVarnishTime = x1 * x3;
    let newVarnishTime = x2 * x3;

    // if new varnish takes less time
    if (newVarnishTime < oldVarnishTime) {
        return 0;
    }

    // return the extra time required for the new varnish
    return newVarnishTime - oldVarnishTime;
}
