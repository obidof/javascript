const savdoBox = document.getElementById('savdo-box')
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
        },
        savdoInt.innerHTML = '',
        savdoInt1.innerHTML = '',
        savdoInt2.innerHTML = '',
        savdoInt3.innerHTML = '',

    )
}

let profileLink = document.getElementById('profileLink')
const isLoggedIn = localStorage.getItem("password");

if (profileLink) {
    profileLink.setAttribute("href", isLoggedIn ? "profil.html" : "../login/login.html");
}

// -------------------------------------------------------------------------------------------------------

const sotildifunction = (id) => {


    fetch(`http://localhost:5000/api/products/${id}/sell`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },

    }).then((res) => res.json())
        .then((data) => {
            console.log(data.message)
            getdata()

            Toastify({
                text: data.message,
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
        })
}


const Qaytarildifunction = (id) => {
    fetch(`http://localhost:5000/api/products/${id}/return `, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
    }).then((res) => res.json())
        .then((data) => {
            console.log(data, 'qaytdi')
            getdata()

             Toastify({
                text: data.message,
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
            
        })

}

const deletefunction = (id) => {
    fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
    }).then((res) => res.json())
        .then((data) => {
            console.log(data)
            getdata()

             Toastify({
                text: data.message,
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
            
        })
}

// -------------------------------------------------------------------------------------------------------

function getdata() {
    fetch('http://localhost:5000/api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            const productDiv = document.getElementById("product");
            productDiv.innerHTML = ''

            data.map(item => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                <div class = "card-box">
                    <h1>Nomi:${item.name}</h1>
                    <h2>Razmeri:${item.size}</h2>
                    <h3>Soni:${item.quantity}</h3>
                    <p>Narxi: ${item.price} so'm</p>
                </div>
                `;

                const sotildi = document.createElement('button')
                sotildi.textContent = 'sotildi'
                sotildi.className = 'btn btn1'
                card.append(sotildi)

                const Qaytarildi = document.createElement('button')
                Qaytarildi.textContent = 'Qaytarildi'
                Qaytarildi.className = 'btn btn2'
                card.append(Qaytarildi)
                Qaytarildi.onclick = () => {
                    Qaytarildifunction(item.id)
                }

                const dalate = document.createElement('button')
                dalate.textContent = 'dalate'
                dalate.className = 'btn btn3'
                card.append(dalate)


                sotildi.onclick = () => {
                    sotildifunction(item.id)
                }


                productDiv.appendChild(card);
            });
        })
}

getdata()

// ------------------------------------------------------------------------------------------------------------------

savdoBox.onsubmit = (e) => {
    e.preventDefault()

    objj = {
        name: savdoInt.value,
        size: savdoInt1.value,
        quantity: savdoInt2.value,
        price: savdoInt3.value,
    }

    fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objj)

    }).then(res => res.json())
        .then(data => {
            getdata()
        })
}


// -----------------------------------------------------------------------------------------------------


