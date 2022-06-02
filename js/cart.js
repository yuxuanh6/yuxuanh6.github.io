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
};