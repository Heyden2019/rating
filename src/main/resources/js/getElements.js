
export  default function getElements () {
    const styleElem = document.head.appendChild(document.createElement("style"));
    const ratingSelectorStars = Array.from(document.getElementsByClassName("icon-selector"));
    const ratingSelectedStars = Array.from(document.getElementsByClassName("icon-selected"));
    const resultRatingElem = document.getElementById("resultRating");
    const ratesElem = document.getElementById("rates");
    const elements = {
        styleElem: styleElem,
        ratingSelectorStars: ratingSelectorStars,
        ratingSelectedStars: ratingSelectedStars,
        resultRatingElem: resultRatingElem,
        ratesElem: ratesElem
    }
    return elements;
}