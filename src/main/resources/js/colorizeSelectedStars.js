export default function colorizeSelectedStars(star, i, resultRating) {
    star.classList.remove("orange-star");
    star.classList.remove("not-full-star");
    if (i+1 <= resultRating) {
        star.classList.add("orange-star");
    } else if (i < resultRating) {
        star.classList.add("not-full-star");
    }
}