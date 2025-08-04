const image = document.getElementById('image')
const body = document.getElementById('body')
const btn = document.getElementById('btn')
const koz = document.getElementById('koz')


image.onclick = () => {
    body.classList.toggle('dark')
}

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')



btn.onclick = (e) => {
    e.preventDefault()
    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)
    console.log(
        {
            ism: input1.value,
            email: input2.value,
            password: input3.value
        }
    );
    
}

toggle = false
koz.onclick = () => {
    toggle=!toggle
    
    console.log(toggle)

    if(toggle) {
        input3.type = 'text'
    } 
    else{
        input3.type = 'password'
    }
}
