export default function addMouseEventListeners (stars) {
    stars.forEach((star, i, stars) => {
        star.addEventListener("mouseover", async (e) => {
            star.classList.remove("mouse-over-star");
            for (let j = 0; j <= i; j++) {
                stars[j].classList.add("mouse-over-star");
            }
        });

        star.addEventListener("mouseout", async (e) => {
            stars.forEach(star => star.classList.remove("mouse-over-star"))
            })
    })
}