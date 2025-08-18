const result = document.querySelector('.result')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', () =>  {
        let btnValue = btn.textContent;
        sum += btnValue
        result.value = sum
    })
})
