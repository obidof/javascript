const ism = "taraqqiyot teaching center"
// localStorage.setItem('name', ism)
// localStorage.setItem('neme', 'nasimxon')

//malumot olish
let olinayotganData = localStorage.getItem('ism')

const name = document.getElementById('name')
const check = document.getElementById('check')

ism.textContent = olinayotganData

// =================================================================

let getToggle = JSON.parse(localStorage.getItem('toggle' || false))

console.log(getToggle);
check.onchange = (e) => {
    localStorage.setItem('toggle', e.target.checked)
    getToggle = JSON.parse(localStorage.getItem('toggle' || false))

    toggleFunction()
    console.log(e.target.checked);

}
function toggleFunction() {
    if (getToggle) {
        document.body.style.background = '#333'
        check.checked = true
    }
    else {
        document.body.style.background = 'white'

    }
}
toggleFunction()




