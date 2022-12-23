// let aboutBack = document.getElementsByClassName(".directors__item--back"),
//     aboutFront = document.getElementsByClassName(".directors__item--front"),
//     aboutDirectorsBtn = document.getElementsByClassName(
//         ".directors__item--button"
//     );

// aboutDirectorsBtn.addEventListener("click", function () {
//     aboutBack.classList.add("directors__item--active");
//     aboutFront.classList.remove("directors__item--active");
//     console.log(1);
// });

let MobileMenuOpenBtn = document.querySelector(".mobile__menu--button"),
    MobileMenuCloseBtn = document.querySelector(".mobile__exit--button"),
    MobileMenu = document.querySelector(".navigation");

MobileMenuOpenBtn.addEventListener("click", function () {
    MobileMenu.style.right = "0";
    console.log(1);
});

MobileMenuCloseBtn.addEventListener("click", function () {
    MobileMenu.style.right = "-100%";
    console.log(1);
});
