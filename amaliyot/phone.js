import { products } from "./data.js"
console.log(products)
const moon = document.querySelector('moon')
const icons = document.querySelector('.icon-box')
const dark = document.querySelector('.dark')


let toggle = JSON.parse(localStorage.getItem('dark') || false)
console.log(toggle)
dark.onclick = () => {
    toggle = !toggle
    localStorage.setItem('dark', toggle)
    darkMode(toggle)
}

function darkMode(toggle) {
    if (toggle) {
        document.body.classList.add('darkmod')
        dark.innerHTML = '<ion-icon class="moon" name="sunny-outline"></ion-icon>'
    }
    else {
        dark.innerHTML = '<ion-icon class="moon" name="moon-outline"></ion-icon>'
        document.body.classList.remove('darkmod')
        
    }
}
darkMode(toggle)

// ============================================================================================


let buy = document.querySelector('.buy')
let modal = document.querySelector('.modal')
let close = document.getElementById('close')



buy.onclick = () => {
    modal.classList.add('openModal')
}

close.onclick = () => {
    modal.classList.remove('openModal')
}


products.map((item)=>{
    const list = document.createElement('li')
    list.classList.add('smartfonlar')
    list.textContent = item.name

    list.onclick = () =>{
        console.log(item)
    }
    
    menu.append(list)
})