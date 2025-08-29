let apiKey = "PfZepc7ZJ5jf1RcGV5W2rTxiPmte1mepMGxwaYKCb7GtV3ROF01mJmbG"

const images = document.querySelector('.images')
const searchinput = document.getElementById('searchinput')
const btn = document.getElementById('btn')

btn.onclick = () => {
    getImages(searchinput.value)

}

function getImages(search = ) {
    fetch(`https://api.pexels.com/v1/search?query=$panda&per_page=100`, {
        method: 'GET',
        headers: {
            Authorization: apiKey
        },
    }).then((res) => res.json())
        .then((data) => {
            let myPhotos = data.photos
            myPhotos.map((item) => {
                const htmlImg = document.createElement('img')
                htmlImg.setAttribute('src', item.src.original, "loading", "lazy")

                htmlImg.classList.add('image')
                images.append(htmlImg)
            })



        })
        .catch((err) => console.error('Xatolik', err))
}

// ===========================================================================================================


