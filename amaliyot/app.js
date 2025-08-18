import { products } from "./data.js"
let products1 = products[0]

const moon = document.querySelector('moon')
const icons = document.querySelector('.icon-box')
const dark = document.querySelector('.dark')

let toggle = false
dark.onclick = () => {
    toggle = !toggle

    document.body.classList.toggle('darkmod')
    if (toggle) {
        dark.innerHTML = '<ion-icon class="moon" name="sunny-outline"></ion-icon>'
    }
    else {
        dark.innerHTML = '<ion-icon class="moon" name="moon-outline"></ion-icon>'
    }
}

// ===========================================================================================================

let img = document.getElementById('img')
let tab = document.getElementById('tab')

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

const carusel = document.querySelector('.carusel')



let result = 0


// setInterval(() => {
//     if (result >= arr.length - 1) {
//         result = 0
//     }
//     else {
//         result++
//     }

//     img.src = (arr[result])


// }, 1000)

btn1.onclick = () => {
 window.location.href = '#img1'
}

// btn2.onclick = () => {
//  window.location.href = '#img2'
// }

// btn3.onclick = () => {
//  window.location.href = '#img3'
// }

// btn4.onclick = () => {
//  window.location.href = '#img4'
// }

// ==========================modal================================

let buy = document.querySelector('.buy')
let modal = document.querySelector('.modal')
let close = document.getElementById('close')

buy.onclick = () => {
    modal.classList.add('openModal')
}

close.onclick = () => {
    modal.classList.remove('openModal')
}

