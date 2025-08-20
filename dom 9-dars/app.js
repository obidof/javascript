const menu = document.getElementById('menu')
const responsive = document.querySelector('.responsive-nav')

menu.onclick = () => {
    responsive.classList.toggle('responsive-navToggle')
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => 
    
        data.map((item) => {
            console.log(item.id);
            console.log(item.name);
            console.log(item.username);
            
        })
    )
