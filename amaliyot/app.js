import { products } from "./data.js"
let products1 =  products[0] 

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

