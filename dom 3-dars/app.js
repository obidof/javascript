const mainInput = document.getElementById('text')
const result = document.getElementById('result')

mainInput.onchange = (e) => {           //inputni onchange hossasi inputga malumot yozilgandan keyin boshqa joy fokus bolganda chiqadi
    result.textContent = e.target.value
    // e.target.value = 'renga'        bu code inputni type ni ozgartiradi
}

mainInput.oninput = (e) => {
    result.textContent = e.target.value
}

btn.onclick = () => {
    console.log(mainInput.value);
    para.textContent = mainInput.value

}

check.onchange = (e) => {
    // checkboxdan qiymat olish
    let bg = e.target.checked
    if (bg) {
        btn.classlist.add('btn')
    }
    else {
        btn.classlist.remove('btn')
    }
}

const range = document.getElementById('range')
const box = document.querySelector('.box')

range.oninput = (e) => {
    box.textContent = e.target.value
    box.style.transform = `rotate(${e.target.value}deg)`
    
    
}