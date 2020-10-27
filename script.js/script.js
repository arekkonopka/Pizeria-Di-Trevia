//burger menu

const burgerBtn = document.querySelector(".burger")
const slideMenu = document.querySelector('.slidemenu')
// const hiddenMenu = document.querySelector('.slidemenu a li')

function burgerBtnClick() {
    burgerBtn.classList.toggle('active')
    slideMenu.classList.toggle('active')
}

burgerBtn.addEventListener("click", burgerBtnClick)

//scroll animation

// const wrap1 = document.querySelector('.wrapp1')
// let wrap1Height = wrap1.getBoundingClientRect(scroll).top;
// const wrap2 = document.querySelector('.wrapp2')
// let wrap2Height = wrap2.getBoundingClientRect(scroll).top;
// const wrap3 = document.querySelector('.wrapp3')
// let wrap3Height = wrap3.getBoundingClientRect(scroll).top;

// document.addEventListener("scroll", scrollAnimation)

// function scrollAnimation() {
//     let windowScrollValue = window.scrollY;
//     let windowHeight = window.innerHeight;

//     if (windowScrollValue > wrap1Height) {
//         wrap1.classList.add('go');
//     }
//     if (windowScrollValue > wrap2Height) {
//         wrap1.classList.add('go');
//     }
//     if (windowScrollValue > wrap3Height) {
//         wrap1.classList.add('go');
//     }
//     if (windowScrollValue < 100) {
//         wrap1.classList.remove('go');
//         wrap2.classList.remove('go');
//         wrap3.classList.remove('go');
//     }
// }