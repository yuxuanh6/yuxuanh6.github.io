window.onload = () => {
    const slideItemsDom = document.querySelectorAll(".slide-menu .item");
    if (slideItemsDom && slideItemsDom.length > 0) {
        for (const itemDom of slideItemsDom) {
            itemDom.addEventListener("mouseover", (e) => {
                console.log("item dom is: ", itemDom);
                const subMenuDom = itemDom.querySelector(".sub-menu");
                console.log("sub menu dom is: ", subMenuDom);
                if (subMenuDom && subMenuDom.classList.contains("close")) {
                    subMenuDom.classList.remove("close");
                }
            });
            itemDom.addEventListener("mouseout", (e) => {
                const subMenuDom = itemDom.querySelector(".sub-menu");
                if (subMenuDom && !subMenuDom.classList.contains("close")) {
                    subMenuDom.classList.add("close");
                }
            });
        }
    }

    const menuBtnDom = document.getElementById("menu-btn");
    const floatSlideMenuDom = document.getElementById("float-slide-menu");

    menuBtnDom.addEventListener("click", () => {
        if (floatSlideMenuDom && floatSlideMenuDom.classList.contains("hide")) {
            floatSlideMenuDom.classList.remove("hide");
        }
    });

    const closeSlideMenuBtnDom = document.getElementById("close-slide-menu-btn");
    closeSlideMenuBtnDom.addEventListener("click", () => {
        if (floatSlideMenuDom && !floatSlideMenuDom.classList.contains("hide")) {
            floatSlideMenuDom.classList.add("hide");
        }
    });
};