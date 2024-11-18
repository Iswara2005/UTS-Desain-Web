// ini adalah menu
const btnHumberger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
btnHumberger.addEventListener("click", () => {
    btnHumberger.classList.toggle("is-active");
    menu.classList.toggle("menu-active")
});

// ini adalah feedback
const loadMore = document.querySelector(".load-more-btn");
let jumlahItem = 3;

loadMore.addEventListener("click", () => {
    // console.log("test");
    let boxes = [...document.querySelectorAll(".feedback-box .box")];
    for (let i = jumlahItem; i < jumlahItem + 3; i++) {
        boxes[i].style.display = "inline-block"
    }

    jumlahItem += 3;

    if (jumlahItem >= boxes.length) {
        loadMore.style.display = "none";
    }
});