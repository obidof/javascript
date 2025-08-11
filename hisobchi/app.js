const birthdateInput = document.getElementById('birthdate');
    const result = document.getElementById('result');

    birthdateInput.addEventListener('change', () => {
      const birthDate = new Date(birthdateInput.value);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (!isNaN(age)) {
        result.textContent = `result: ${age} yosh`;
      } else {
        result.textContent = `result: 0 yosh`;
      }

      
    });