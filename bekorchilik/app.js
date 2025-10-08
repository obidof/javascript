const productBox = document.getElementById('product-box')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

console.log(productBox)

const arr = [
    { img: 'image/iphone17.png', name: 'iphone 17 pro max', price: '2000$', katagory: 'phone' },
    { img: 'image/iphonexs.png', name: 'iphone xs max 256gb', price: '250$', katagory: 'phone' },
    { img: 'image/iphone16.png', name: 'iphone 16 pro max', price: '1250$', katagory: 'phone' },
    { img: 'image/asus.png', name: 'asus rog strix G16', price: '4999$', katagory: 'notebook' },
    { img: 'image/macbook.png', name: 'macbook pro m4', price: '4200$', katagory: 'notebook' },
    { img: 'image/airpods.png', name: 'airpods pro 2', price: '299$', katagory: 'airpods' }
];


console.log(arr);

function forEachFunc(data) {
    productBox.innerHTML = ''; // eski kartalarni tozalaymiz
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;

        const title = document.createElement('h2');
        title.textContent = item.name;

        const price = document.createElement('p');
        price.textContent = item.price;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);

        productBox.appendChild(card);
    });
}


forEachFunc(arr)

btn1.onclick = () => {
    window.location.reload()
}

btn2.onclick = () => {
    const filtered = arr.filter(item => item.katagory == 'phone');
    forEachFunc(filtered);
}

btn3.onclick = () => {
    const filtered = arr.filter(item => item.katagory == 'notebook');
    forEachFunc(filtered);
}

btn4.onclick = () => {
    const filtered = arr.filter(item => item.katagory == 'airpods');
    forEachFunc(filtered);
}


