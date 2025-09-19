const savdoInt = document.querySelector('.savdo-int')
const savdoInt1 = document.querySelector('.savdo-int1')
const savdoInt2 = document.querySelector('.savdo-int2')
const savdoInt3 = document.querySelector('.savdo-int3')
const add = document.querySelector('.add')

add.onclick = () => {
    console.log(
        obj = {
            name: savdoInt.value,
            size: savdoInt1.value,
            soni: savdoInt2.value,
            price: savdoInt3.value,
        }
    )
}

let profileLink = document.getElementById('profileLink')
const isLoggedIn = localStorage.getItem("password");

if (profileLink) {
    profileLink.setAttribute("href", isLoggedIn ? "profil.html" : "./login/login.html");
}