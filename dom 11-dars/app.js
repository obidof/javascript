//<tr>
//<td>1</td>
//<td>Rahmadjon</td>
//<td>11</td>
//<td>@gmail.com</td>
//<td>adit</td>
//<td>delete</td>
//</tr>


const name = document.getElementById('name')
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

//delete
const deleteUser = (id) => {
    //console.log('user.id', id)
    fetch(`http://49.12.215.35:4002/users/${id}`,{method:'DELETE'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            getUser()
            alert(data.message)
        })
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
                td6.addEventListener('click',() => {
                    deleteUser(item.id)
                })

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
 getUser()