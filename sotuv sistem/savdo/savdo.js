        const modal1 = document.querySelector(".modal1")
        const modal2 = document.querySelector(".modal2")
        const btn1 = document.querySelector(".btn1")
        const btn2 = document.querySelector(".btn2")
        const exit = document.querySelector(".exit")
        const exit1 = document.querySelector(".exit1")

        btn1.onclick = () => {
            modal1.style.display = 'block'
        }
        exit.onclick = () => {
            modal1.style.display = 'none'
        }


        btn2.onclick = () => {
            modal2.style.display = 'block'
        }
        exit1.onclick = () => {
            modal2.style.display = 'none'
        }

        window.addEventListener("keydown", ({ key }) => {
            if (key == 'Enter') {
                console.log('enter bosildi');
            }
        })
