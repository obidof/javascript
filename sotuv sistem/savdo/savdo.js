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

// -------------------------------- GET ---------------------

const savdoBox = document.querySelector('.savdo-box')

fetch('http://localhost:5000/api/products/sold', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
}).then((res) => res.json())
    .then((data) => {
        const table = document.createElement('table');
        data.forEach(item => {
            console.log(item)

            const tr = document.createElement('tr');

            const tdId = document.createElement('td'); tdId.textContent = item.id;
            const tdName = document.createElement('td'); tdName.textContent = item.name;
            const tdQty = document.createElement('td'); tdQty.textContent = item.quantity;
            const tdTotal = document.createElement('td'); tdTotal.textContent = item.size;
            const tdPrice = document.createElement('td'); tdPrice.textContent = item.price + " so'm";
            

            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdQty);
            tr.appendChild(tdPrice);
            tr.appendChild(tdTotal);

            table.appendChild(tr);
        });
        savdoBox.append(table)
    })

// ===========================================================

console.log(savdoBox)

