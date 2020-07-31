export default function fillSelectorStars(star, i, currentUserVote) {
    star.classList.remove("aui-iconfont-new-star");
    star.classList.remove("aui-iconfont-star-filled");
    if (i+1 <= currentUserVote) {
        star.classList.add("aui-iconfont-star-filled");
    } else {
        star.classList.add("aui-iconfont-new-star");
    }
}