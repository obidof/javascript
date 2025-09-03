const apiKey = "PfZepc7ZJ5jf1RcGV5W2rTxiPmte1mepMGxwaYKCb7GtV3ROF01mJmbG"

const vid = document.querySelector(".videos-box")
const input = document.querySelector(".search")
const icon = document.querySelector(".icon")

icon.onclick = () => {
    getVideos(input.value)
}

function getVideos(search = 'nature', pagesize = 20) {
    fetch(`https://api.pexels.com/videos/search?query=${search}&per_page=${pagesize}`,{
        method: 'GET',
        headers: {
            Authorization: apiKey
        },
    }).then((res) => res.json())
        .then((data) => {
            let videolink = data.videos

            console.log(videolink)
            videolink.map((item) => {

                const videobox = document.createElement('video')
                videobox.setAttribute('src', item.video_files[3].link)
                videobox.setAttribute('controls', 'controls')
                console.log(videobox)
                videobox.classList.add('videos')
                vid.append(videobox)

            })


        })
        .catch((err) => console.error('Xatolik', err))
}
getVideos()





