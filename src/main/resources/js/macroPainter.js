import addMouseEventListeners from "./addMouseEventListeners";
import colorizeSelectedStars from "./colorizeSelectedStars";
import fillSelectorStars from "./fillSelectorStars";

export default function macroPainter(macroData, elements) {
    elements.ratesElem.innerHTML = macroData.rates ? macroData.rates : "0";
    if (macroData.resultRating) {
        elements.resultRatingElem.innerHTML = (parseInt(macroData.resultRating * 10)) / 10;
    }

    const starPercent = macroData.resultRating % 1 * 100;

    elements.styleElem.innerHTML = ".not-full-star:before {" +
        `        background:-moz-linear-gradient(left, #FFA500 ${starPercent}%, gray ${starPercent}%);` +
        `        background: -webkit-linear-gradient(left, #FFA500 ${starPercent}%, gray ${starPercent}%);` +
        `       background: linear-gradient(to right, #FFA500 ${starPercent}%, gray ${starPercent}%);` +
        "        -webkit-background-clip: text;" +
        "        -moz-background-clip: text;" +
        "        background-clip: text;}"

    elements.ratingSelectedStars.forEach((star, i) => colorizeSelectedStars(star, i, macroData.resultRating));

    if (macroData.isVoted) {
        elements.ratingSelectorStars.forEach((star, i) => fillSelectorStars(star, i, macroData.currentUserVote));
    }

    addMouseEventListeners(elements.ratingSelectorStars);
}