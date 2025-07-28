let people = [
    {
        id: 1,
        name: "Ali Karimov",
        age: 28,
        job: "Dasturchi",
        male: true,
        phoneUz: "+998 90 123 45 67",
        phoneRu: "+7 926 123 45 67"
    },
    {
        id: 2,
        name: "Zarina Yuldasheva",
        age: 24,
        job: "Grafik dizayner",
        male: false,
        phoneUz: "+998 91 234 56 78",
        phoneRu: "+7 925 234 56 78"
    },
    {
        id: 3,
        name: "Javohir Abduvaliev",
        age: 31,
        job: "Shifokor",
        male: true,
        phoneUz: "+998 93 345 67 89",
        phoneRu: "+7 917 345 67 89"
    },
    {
        id: 4,
        name: "Dilnoza Tursunova",
        age: 22,
        job: "Talaba",
        male: false,
        phoneUz: "+998 94 456 78 90",
        phoneRu: "+7 918 456 78 90"
    },

]

// CRUD
// CREATE - YANGI YARATISH
// READ - MALUMOTLARNI O'QISH
// UPDATE - MALUMOTNI YANGILASH
// DELETE - MALUMOTNI O'CHIRISH

function createUser(user) {
    if (!user.id || user.id < 0) {
        console.log('id bosh yoki 0 dan kichkina biz malumot qosha olamdik');

    }
    else {
        people.push(user)
        console.log(people)
    }
}

createUser({
    id: people.length + 1,
    name: "Yangi user",
    age: 111,
    job: 'Designer',
    male: true,
    phoneUz: "+998 94 456 78 90",
    phoneRu: "+7 918 456 78 90"
})

// const updaterUser = (id, user) => {                              ============
//     people[id] = { ...people[id], ...user }                          ============
//     console.log(people);                                                 ============
//                                                                                ============          malumot kiritish uchun kerak code
//                                                                          ============
// }                                                                    ============
// updaterUser(4, { name: 'zohida abdujabarrova', age: 22 })        ============

// const deleteUser = (id) => {                                     ============
//     people = people.filter((item) => item.id != id)                  ============
//     console.log(people);                                                    ============
//                                                                                    ============
//                                                                                          ============    objectni delete qilish uchun code
// }                                                                                  ============
// deleteUser(2)                                                                ============
// deleteUser(3)                                                            ============
// deleteUser(4)                                                       ============
'salom'