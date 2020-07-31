export default async function getMacroData () {
    const currentUserKey = AJS.params.remoteUserKey;
    const url = `/rest/rating/1.0/ratingdata/${AJS.params.pageId}`;
    let isVoted = false;
    let currentUserVote = null;
    let sumOfRates = 0;
    const responce = await fetch(url).then(async (r) => await r.json());
    const rates = responce.length;
    responce.map(vote => {
        if (vote.userKey === currentUserKey) {
            isVoted = true;
            currentUserVote = vote.rating;
        }
        sumOfRates += vote.rating;
    });
    const resultRating = sumOfRates / rates;
    const macroData = {
        resultRating: resultRating,
        rates: rates,
        isVoted: isVoted,
        currentUserVote: currentUserVote,
        currentUserKey: currentUserKey,
        url: url
    };
    return macroData;
}