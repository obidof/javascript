const users = document.getElementById('users')
const userdata = [
    {
        id: 1,
        name: 'nasimxon',
    },
    {
        id: 2,
        name: 'sardorbek',
    },
]

function deleteUser(user) {
    const filterUser = userdata.filter((item) => item.id !== user.id)
    getUser(filterUser)

}

function getUser(data) {
    users.innerHTML = ''
    data.forEach((item) => {
        const para = document.createElement('p')

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'delete'

        deleteBtn.onclick = () => {
            deleteUser(item)
        }

        para.textContent = item.name
        users.append(para)
        users.append(deleteBtn)

    })
}

getUser(userdata)
