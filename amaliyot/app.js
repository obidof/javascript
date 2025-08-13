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

AOS.init();

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
const carusel = document.querySelector('.carusel')
const arr = ['./image/image copy 8.png', './image/image copy 9.png']

let result = 0
const images = document.createElement('img')

images.setAttribute('src', arr[0])

carusel.append(images)

setInterval(() => {
    if (result >= arr.length - 1) {
        result = 0
    }
    else {
        result++
    }

    images.setAttribute('src', arr[result])


}, 3000)