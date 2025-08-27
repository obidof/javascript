//<tr>
//<td>1</td>
//<td>Rahmadjon</td>
//<td>11</td>
//<td>@gmail.com</td>
//<td>adit</td>
//<td>delete</td>
//</tr>


const ism = document.getElementById('ism')
// console.log(name);
const age = document.getElementById('age')
// console.log(age);
const email = document.getElementById('email')
// console.log(email);
const table = document.getElementById('table')
// console.log(table);
const count = document.getElementById('count')
// console.log(count);
const title = document.getElementById('title')
// console.log(title);
const form = document.getElementById('form')

const upName = document.getElementById('up-name')

const upAge = document.getElementById('up-age')

const upEmail = document.getElementById('up-email')

const upData = document.getElementById('up-data')

//delete
const deleteUser = (id) => {
    //console.log('user.id', id)
    fetch(`http://49.12.215.35:4002/users/${id}`, { method: 'DELETE' })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            getUser()
            getNotify(data.message)
        })
}

const modalContainer = document.querySelector('.modalContainer')
const closeicon = document.getElementById('closeicon')
modalContainer.classList.add('closemodal')

closeicon.onclick = () => {
    modalContainer.classList.add('closemodal')

}

updataUserFunction = (user) => {
    upName.value = user.name
    upAge.value = user.age
    upEmail.value = user.email
    upData.onclick = () => {
    let updataUser = {
        name: upName.value,
        age: upAge.value,
        email: upEmail.value,
     }
     console.log(updataUser);
    
     fetch(`http://49.12.215.35:4002/users/${user.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updataUser)
     }).then((res) => res.json())
     .then((data) => {
        getNotify(data.message)
        getUser()
     })
}
}

function getUser() {
    table.innerHTML = ' '
    fetch("http://49.12.215.35:4002/users")
        .then((res) => res.json())
        .then((data) => {
            title.textContent = data.message
            count.textContent = data.count

            data.data.map((item) => {
                const trow = document.createElement('tr')
                const td1 = document.createElement('td')
                const td2 = document.createElement('td')
                const td3 = document.createElement('td')
                const td4 = document.createElement('td')
                const td5 = document.createElement('td')
                const td6 = document.createElement('td')

                td1.textContent = item.id
                td2.textContent = item.name
                td3.textContent = item.age
                td4.textContent = item.email
                td5.textContent = 'edit'
                td6.textContent = 'delete'

                //deleta
                td6.addEventListener('click', () => {
                    deleteUser(item.id)
                })

                td5.onclick = () => {
                    modalContainer.classList.remove('closemodal')
                    updataUserFunction(item)
                }

                trow.append(td1)
                trow.append(td2)
                trow.append(td3)
                trow.append(td4)
                trow.append(td5)
                trow.append(td6)

                table.append(trow)
            })
        })
}

function getNotify(message) {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}



form.onsubmit = (e) => {
    e.preventDefault()
    const newUser = {
        name: ism.value,
        age: age.value,
        email: email.value,
    }

    fetch('http://49.12.215.35:4002/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    }).then((res) => res.json())
        .then((data) => {
            console.log(data)
            getUser()
            getNotify(data.message)
            ism.value = ''
            age.value = ''
            email.value = ''
        })
}

getUser()



