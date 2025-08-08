const ism = document.getElementById('ism')
const email = document.getElementById('email')
const parol = document.getElementById('parol')
const btn = document.getElementById('btn')
const form = document.getElementById('form')

function DataForm() {
    // console.log(ism.value);
    // console.log(email.value);
    // console.log(parol.value);
    let newArr = {
        ism: ism.value,
        email: email.value,
        parol: parol.value
    }
    console.log(newArr);
}



form.onsubmit = (e) => {
    e.preventDefault()
    DataForm()
}

parol.onchange = (e) => {
    let pass = e.target.value
    if (pass.length < 7) {
        btn.disabled = true
        text.style.transform = 'translateY(10px)'
        setTimeout(() => {
            text.style.transform = 'translateY(-100px)'
        }, 5000)
    }
    else {
        btn.disabled = false
    }
}


const count = document.getElementById('count')
const textare = document.getElementById('textare')

textare.oninput = (e) => {
    let maintext = e.target.value
    count.textContent = maintext.split(/\s+/).length
}

const openModal = document.getElementById('openmodal')
const modalcontainer = document.getElementById('modalcontainer')

modalcontainer.style.display = 'none'

openmodal.onclick = () => {
    modalcontainer.style.display = 'block'
}

x.onclick = () => {
    modalcontainer.style.display = 'none'
}
