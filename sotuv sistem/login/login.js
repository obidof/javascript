const loginForm = document.getElementById('loginForm');

const close = document.getElementById('close');



loginForm.onsubmit = (e) => {
    e.preventDefault()
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let obj = { email, password }
    const login = async (obj) => {
        try {

            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            }).then(res => res.json()).then(data => data)

            console.log(response, 'login')
            localStorage.setItem('token', response.token)
            localStorage.setItem('role', response.role)

            window.location.href = '../profile/profil.html'

        } catch (err) {
            console.log(err, "Xatolik")
        }


    }


    login(obj)
}