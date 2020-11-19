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
// console.log(wrap1.getBoundingClientRect(scrollY));
// const wrap2 = document.querySelector('.wrapp2')
// let wrap2Height = wrap2.getBoundingClientRect().top
// const wrap3 = document.querySelector('.wrapp3')
// let wrap3Height = wrap3.getBoundingClientRect(scroll).top + window.scrollY;
// let windowScrollValue = window.scrollY;

// document.addEventListener("scroll", scrollAnimation)

// function scrollAnimation() {
//     // let windowScrollValue = window.scrollY;
//     let windowHeight = window.innerHeight;

//     // if (windowScrollValue > wrap1Height - windowHeight) {
//     //     wrap1.classList.add('go');
//     // }
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
const wrapp1 = document.querySelector('.wrapp1');
const wrapp2 = document.querySelector('.wrapp2');
const wrapp3 = document.querySelector('.wrapp3');

document.addEventListener('scroll', () => {
    let windowScrollValue = window.scrollY;
    let wrapp1HeightTop = wrapp1.getBoundingClientRect().top;
    let wrapp2HeightTop = wrapp2.getBoundingClientRect().top;
    let wrapp3HeightTop = wrapp3.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;


    if (windowScrollValue > (wrapp1HeightTop + (windowHeight * 2.2))) {
        wrapp1.classList.add('go')
    }
    if (windowScrollValue > (wrapp2HeightTop + (windowHeight * 3))) {
        wrapp2.classList.add('go')
    }
    if (windowScrollValue > (wrapp3HeightTop + (windowHeight * 4))) {
        wrapp3.classList.add('go')
    }
    if (windowScrollValue < 100) {
        wrapp1.classList.remove('go')
        wrapp2.classList.remove('go')
        wrapp3.classList.remove('go')
    }
})