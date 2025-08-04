// const mainInput = document.getElementById('text')
// const result = document.getElementById('result')

// mainInput.onchange = (e) => {           //inputni onchange hossasi inputga malumot yozilgandan keyin boshqa joy fokus bolganda chiqadi
//     result.textContent = e.target.value
//     // e.target.value = 'renga'        bu code inputni type ni ozgartiradi
// }

// mainInput.oninput = (e) => {
//     result.textContent = e.target.value
// }

// btn.onclick = () => {
//     console.log(mainInput.value);
//     para.textContent = mainInput.value

// }

// check.onchange = (e) => {
//     // checkboxdan qiymat olish
//     let bg = e.target.checked
//     if (bg) {
//         btn.classlist.add('btn')
//     }
//     else {
//         btn.classlist.remove('btn')
//     }
// }

// const range = document.getElementById('range')
// const box = document.querySelector('.box')

// range.oninput = (e) => {
//     box.textContent = e.target.value
//     box.style.transform = `rotate(${e.target.value}deg)`


// }

// =================================================================================================================================================================================

const image = document.getElementById('image')
const body = document.getElementById('body')
const btn = document.getElementById('btn')
const koz = document.getElementById('koz')


image.onclick = () => {
    body.classList.toggle('dark')
}

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')



btn.onclick = (e) => {
    e.preventDefault()
    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)
    console.log(
        {
            ism: input1.value,
            email: input2.value,
            password: input3.value
        }
    );
    
}

toggle = false
koz.onclick = () => {
    toggle=!toggle
    
    console.log(toggle)

    if(toggle) {
        input3.type = 'text'
    } 
    else{
        input3.type = 'password'
    }
}
