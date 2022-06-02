window.onload = () => {
    const addAddressBtnDom = document.getElementById("add-address-btn");
    const addAddressPaneDom = document.getElementById("add-address-pane");
    const cancleAddressBtnDom = document.getElementById("cancle-address-btn");

    addAddressBtnDom.addEventListener("click", () => {
        if (addAddressPaneDom.classList.contains("hide")) {
            addAddressPaneDom.classList.remove("hide");
        }
    });

    cancleAddressBtnDom.addEventListener("click", () => {
        if (!addAddressPaneDom.classList.contains("hide")) {
            addAddressPaneDom.classList.add("hide");
        }
    });
};