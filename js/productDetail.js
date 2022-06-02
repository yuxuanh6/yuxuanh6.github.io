window.onload = () => {
    const reduceBtnDom = document.getElementById("reduce-btn");
    const increaseBtnDom = document.getElementById("increase-btn");
    const quantityDom = document.getElementById("quantity");

    reduceBtnDom.addEventListener("click", () => {
        const val = parseInt(quantityDom.innerText);
        if (val > 0) {
            let newVal = val - 1;
            quantityDom.innerText = newVal;
        }
    });

    increaseBtnDom.addEventListener("click", () => {
        const val = parseInt(quantityDom.innerText);
        let newVal = val + 1;
        quantityDom.innerText = newVal;
    });

    const ratingItemDoms = document.querySelectorAll(".rating-container .rating-item");
    const ratingScoreDom = document.getElementById("rating-score");
    const updateScore = (score) => {
        for (let i = 0; i < ratingItemDoms.length; ++i) {
            const ratingItemDom = ratingItemDoms[i];
            ratingItemDom.innerHTML = "<img src='icons/star.png' />";
        }
        for (let i = 1; i <= score; ++i) {
            const ratingItemDom = ratingItemDoms[i - 1];
            ratingItemDom.innerHTML = "<img src='icons/stared.png' />";
        }
        for (let i = score + 1; i < ratingItemDoms.length; ++i) {
            const ratingItemDom = ratingItemDoms[i];
            ratingItemDom.innerHTML = "<img src='icons/star.png' />";
        }
    };
    // console.log(ratingItemDoms);
    if (ratingItemDoms && ratingItemDoms.length > 0) {
        for (const rid of ratingItemDoms) {
            rid.addEventListener("click", (e) => {
                e.preventDefault();
                const score = parseInt(rid.getAttribute("data-score"));
                ratingScoreDom.innerText = `${score}.0`;
                updateScore(score);
            });
        }
    }
};