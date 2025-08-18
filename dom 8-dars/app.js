const result = document.querySelector('.result')
const btns = document.querySelectorAll('.btn')
const errormsg = document.querySelector('.errormsg')

errormsg.style.display = 'none'

let sum = ''

result.oninput = (e)=>{
    sum = e.target.value
}

btns.forEach((btn) => {
    let btnValue = btn.textContent;
    btn.addEventListener('click', () => {

        if (btnValue == 'C' || btnValue == '.' || btnValue == '=' || btn.className == 'btn back') {
        }

        if (btnValue == 'C') {
            result.value = ''
            sum = ''
        }

        if (btnValue == '=') {

            try {
                result.value = eval(sum.replaceAll('x', '*'))
                sum = result.value;
                console.log(sum)
            } catch (err) {
                errormsg.style.display = 'block'
            }
        }

        else {
            sum += btnValue
            result.value = sum
        }

    })

})

