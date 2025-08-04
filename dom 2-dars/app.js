// const title = document.getElementById('title')
// const videos = document.getElementById('videos')
// const btn = document.getElementById('btn')

// const addclass = () => {
//     title.classList.toggle('title')
//     videos.setAttribute('controls' , 'controls')
// }

// btn.onclick = () => {
//     addclass()
// }

const para = document.getElementById('para')
para.style.backgroundColor = 'red'
para.style.padding = '10px'
para.color = 'white'

function darkmode() {
    document.body.classList.toggle('dark')

}

btn.onclick = () => darkmode()

const text = 'dushanba'
const gradus = '45'
const box = document.getElementById('box')

// box.innerHTML = `<div>
// <h1>"salom"</h1> ${text}
// <p>${gradus}</p></div>`

const title = document.createElement('h1')
title.textContent = text
const undeline = document.createElement('u')
undeline.textContent = 'underline'

box.append(title)       //ketma ket qoshadi
box.append(undeline)
box.prepend(undeline)      //brinchiga qoshadi
console.log(box);

const button = document.createElement('button')
button.textContent = 'click me'
button.setAttribute('class' , 'btn')

document.body.append(button)

button.onclick = () => {
    alert('welcome')
}