// const text = document.getElementById('text')
// const getbtn = document.getElementById('getbtn')
// const check = document.getElementById('check')
// const color = document.getElementById('color')
// const select = document.getElementById('select')

// check.onchange = (e) => {
//     console.log(e.target.checked)
//     if (e.target.checked) document.body.style.background = 'black'
//     else {
//         document.body.style.background = 'white'
//     }
// }
// color.oninput = (e) => {
//     console.log(e.target.value)
//     title.style.color = e.target.value;
// }



// const form = document.getElementById('form');
// const formdata = document.getElementById('formdata');

// select.onchange = (e) => {
//     let id = e.target.value
//     console.log(id)
//     form.action = https://jsonplaceholder.typicode.com/posts/${id}
//     form.method = 'get';

// }


const users = [
    {
        id: 1,
        name: 'Nasimhon',
        fio: "Obidof",
        age: "16"
    },
    {
        id: 2,
        name: 'Rahmadjon',
        fio: "Abdullayev",
        age: "1"
    },
]

const ism = document.getElementById('ism')
const fio = document.getElementById('fio')
const age = document.getElementById('age')

const sumbit = document.getElementById('sumbit');

const data = document.getElementById('data');

form.onsubmit = (e) => {
    e.preventDefault()
    let newUser = {
        id: users.length + 1,
        name: ism.value,
        fio: fio.value,
        age: age.value
    }
    users.push(newUser)
   
    getUsers()

}


function getUsers() {
    data.innerHTML = ''
    users.map((item) => {
        const box = document.createElement('div');
        const title = document.createElement('h1')
        const familiya = document.createElement('h2')
        const para = document.createElement('p')
        title.textContent = `${item.id} - ${item.name}`
        familiya.textContent = item.fio
        para.textContent = item.age
        box.classList.add('user')
        box.append(title)
        box.append(familiya)
        box.append(para)
        data.append(box)
        console.log(data)
    })
}


getUsers()



