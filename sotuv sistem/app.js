const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const count = document.getElementById('count')

let result = localStorage.getItem('result' || 0);

const arr = [
    {
        url: './image/image3.png',
        title: 'Samurai'
    },
    {
        url: './image/image2.png',
        title: 'Samurai'
    },
    {
        url: './images/img3.jpg',
        title: 'Samurai'
    },
    {
        url: './images/img4.jpg',
        title: 'Samurai'
    },
    {
        url: './images/img5.jpg',
        title: 'Samurai'
    },
    {
        url: './images/img6.jpg',
        title: 'Samurai'
    },
]

const imgContainer = document.querySelector('.imgContainer')
const imgteg = document.createElement('img')

const imgfunction = () => {
    imgteg.setAttribute('src', arr[result].url)
}
imgfunction()

imgContainer.append(imgteg)

console.log(imgContainer);

console.log(arr[0].url);

count.textContent = result

console.log(arr.length);





plus.onclick = () => {
    if (result >= arr.length - 1) {
        result = 0
        localStorage.setItem('result', result)
        count.textContent = result
        imgfunction()
    }
    else{
        result++
        localStorage.setItem('result' , result)
        count.textContent = result
        imgfunction()
    }
}

minus.onclick = () => {
    if (result <= 0) {
        result = 0
    }
    else {
        result--
        count.textContent = result
        localStorage.setItem('result', result)
        imgfunction()
    }
}
