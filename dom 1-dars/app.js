//Document
//Window
// console.log(document);
// console.log(window);

//--------------------------------------------------------

const title = document.getElementById('title')      // getElementById id bilan chaqirish uchun kerakli code
const para = document.getElementById('para')      // getElementById id bilan chaqirish uchun kerakli code
console.log(title);

const btn = document.querySelector('.btn')          // querySelector class bilan chaqirish uchun kerakli code 
console.log(btn);


// function SetClass() {
//     title.classList.add('text1')
//     console.log(title);

// }


// title.classList.add('text2')        // class yoniga yana bir class nomi qoshish 
// title.classList.remove('text2')         // agar text2 class berilgan bolsa classList.remove qilib qaysi classni nomini uchirmoqchi bolsangiz yozib uchirasiz

function setClass() {
    title.classList.toggle('text1')        // toggle bu agar text1 classi bolsa olib tashlaydi bolmasa qoshib beradi
    console.log(title);
}

console.log(title);

const image = document.getElementById('image')
//console.log(para.getAtribute('id))        // bu atrebute olish
para.setAttribute('class', 'paragrif')
para.setAttribute('style', 'color: red;')       // bu esa atribute qoshish

console.log(para);

let age = 14
if (age >= 16) {
    para.textContent = 'siz passport olasiz'
}
if (age < 16) {
    para.textContent = 'siz passport olmaysiz 16 kirib keling'
}
