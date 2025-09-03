const apiKey = "PfZepc7ZJ5jf1RcGV5W2rTxiPmte1mepMGxwaYKCb7GtV3ROF01mJmbG"


// https://api.pexels.com/v1/search?query=${searchLink}&per_page=${size}


const images = document.querySelector('.images')
const icon = document.querySelector('.icon')
const input = document.querySelector('.input')
const hash = document.getElementById('hashtag')


icon.onclick = () => {
    getImages(input.value)
}

let card = [
    {
        id: 1,
        text: "bmw"
    },
    {
        id: 2,
        text: "animals"
    },
    {   
        id: 3,
        text: "mountain"
    },
    {
        id: 4,
        text: "fruit"
    },
    {
        id: 5,
        text: "car"
    },
    {
        id: 6,
        text: "flowers"
    },
    {
        id: 7,
        text: "porsche"
    },
    {
        id: 8,
        text: "8k wallpaper"
    },
    {
        id: 9,
        text: "desktop wallpaper"
    },
    {
        id: 10,
        text: "nature"
    },

]


card.map((item) => {
    const hash = document.createElement("button")
    hash.textContent = item.text

    hash.onclick = () => {
        getImages(item.text)
    }

    hashtag.append(hash)
})



function getImages(search = 'bmw', pagesize = 40) {

    fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=${pagesize}`, {
        method: 'GET',
        headers: {
            Authorization: apiKey
        },
    }).then((res) => res.json())
        .then((data) => {

            images.innerHTML = ''
            let myPhotos = data.photos

            myPhotos.map((item) => {

                const htmlImg = document.createElement('img')
                htmlImg.setAttribute('src', item.src.original, "loading", "lazy", 'alt', item.alt)

                htmlImg.classList.add('image')
                images.append(htmlImg)
            })



        })
        .catch((err) => console.error('Xatolik', err))
}
getImages()


// ===========================================================================================================


