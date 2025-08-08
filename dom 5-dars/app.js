const text = document.getElementById('text')
const check = document.getElementById('check')
const color = document.getElementById('color')
const btn = document.getElementById('btn')
const select = document.getElementById('select')

check.onchange = (e) => {
    console.log(e.target.checked);
    if(e.target.checked) document.body.style.background = 'black'
    else{
        document.body.style.background = 'white'
    }    
}

console.log(check);


color.oninput = (e) => {
    console.log(e.target.value);
    title.style.color = e.target.value;    
}

select.onchange = (e) => {
    console.log(e.target.value);
    
}