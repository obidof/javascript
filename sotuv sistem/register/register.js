const registerForm = document.getElementById('Form');

registerForm.onsubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    let obj = { name, email, password }

    const register = async (obj) => {
        try {

            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            }).then(res => res.json()).then(data => data)


            Toastify({
                text: response.error,
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

        } catch (err) {
            console.log(err, "Xatolik")
        }




    }


    register(obj)
}

window.addEventListener("keydown", ({ key }) => {
    if (key == 'Enter') {
        console.log('enter bosildi');
    }
})
