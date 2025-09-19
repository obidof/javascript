    const getme = async () => {
      try {
        const token = localStorage.getItem('token')

        const response = await fetch('http://localhost:5000/api/auth/me', {
          headers: {
            Authorization: token
          }
        }).then(res => res.json()).then(data => data)

        console.log(response, 'me')
        backendname.textContent = response.user.name
        backemail.textContent = response.user.email

      } catch (err) {
        console.log(err, "Xatolik")
      }


    }
    getme()






    // Ma'lumotlarni ko'rsatish
    // window.onload = () => {
    //   const name = localStorage.getItem("username") || "Ismingiz";
    //   const email = localStorage.getItem("email") || "Email manzil";
    //   const img = localStorage.getItem("profileImage");

    //   document.getElementById("nameDisplay").childNodes[0].textContent = name + " ";
    //   document.getElementById("emailDisplay").childNodes[0].textContent = email + " ";

    //   if (img) document.getElementById("profileImage").src = img;
    // };

    // Rasm yuklash
    document.getElementById("uploadImg").addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (e) {
        const imageData = e.target.result;
        document.getElementById("profileImage").src = imageData;
        localStorage.setItem("profileImage", imageData);
      };
      reader.readAsDataURL(file);
    });

    // Tahrirlash
    function editField(field) {
      const display = document.getElementById(field + "Display");
      const input = document.getElementById(field + "Input");
      const value = display.childNodes[0].textContent.trim();

      input.value = value;
      display.style.display = "none";
      input.style.display = "block";
      document.getElementById("saveBtn").style.display = "inline-block";
    }

    // Saqlash
    function saveChanges() {
      const name = document.getElementById("nameInput").value;
      const email = document.getElementById("emailInput").value;

      if (name) {
        localStorage.setItem("username", name);
        document.getElementById("nameDisplay").childNodes[0].textContent = name + " ";
      }

      if (email) {
        localStorage.setItem("email", email);
        document.getElementById("emailDisplay").childNodes[0].textContent = email + " ";
      }

      document.getElementById("nameInput").style.display = "none";
      document.getElementById("emailInput").style.display = "none";
      document.getElementById("nameDisplay").style.display = "block";
      document.getElementById("emailDisplay").style.display = "block";
      document.getElementById("saveBtn").style.display = "none";
    }

    // Chiqish
    function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("profileImage");
      localStorage.removeItem("password");
      window.location.href = "register.html";
    }

    // saveBtn.onclick = () => {
    //   notes.classlist.add('openNotes')
    // }