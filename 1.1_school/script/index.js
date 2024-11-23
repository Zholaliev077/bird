// console.log('request data');

// setTimeout(() => {
// console.log('preparing data');

// const akbar = {
//     status: 200,
//     server: 'ratatat',
//     port: 8080
// }
// setTimeout(() => {
//     console.log('data get', akbar);
    // 
// },1000)

// // }, 3000)

// console.log('request data');



// const prm = new Promise((resolve, reject) => {
//  setTimeout(() => {
//     console.log('prepering data');

// const akbar = {
//     status: 200,
//     server: 'ratatat',
//     port: 8080
// }

// // resolve(akbar,)
// reject('server error')

//  }, 2000)
// })

// prm.then((res) => {
//  console.log(res);
 
// })

// prm.catch((err) => {
//     console.log(err);
    
    
// })


// prm.finally(() => {
//     console.log('i work in any other situation');
    
// })


// ============ function 2 method =================

// prm.then(res =>console.log())

// .catch(arr => console.error(err))

// .finally(() => console.log('rfruiwh')
// )


// ================ FETCH ASUNC AWAIT ===========================

// AJAX - запррос async js and xml
//  fetch - обьект для работы с ззапросами РАБОТАЕТ НА ПРОМИСАХ

// const serch = () => {
//     let url = 'https://samurai.com/api/user/'
//     fetch(url)
//     .then(res => res.json())
//     .catch(err => console.error(err)
//     .finally(() => 'cuhusfiuweh')
//     )
// }


// const serch = async () => {
//    const req = await fetch('https://samurai.com')
//    const res = await req.json()
//    console.log(res);
   

// }





//  ===========================х====================\

let API = 'https://jsonplaceholder.typicode.com/users'
const body = document.body




const getUsers = async () => {
    const req = await fetch(API)
    const res = await req.json()
    renderUsers(res);
    
}

getUsers()

const renderUsers = (users) => {
// console.log(mersedes);
users.forEach(user => {
    console.log(user);
    const card = document.createElement('div')



    
    const userName = document.createElement('h2')
    userName.textContent = user.name
    // ================
    const userEmail = document.createElement('h3')
    userEmail.textContent = `email : ${user.email}`
// =============================
userPhone = document.createElement('h4')
userPhone.textContent = " phone: 1-770-736-8031 x56442"

// ==========================

userCompany = document.createElement('h5')
userCompany.textContent= `company: ${user.company.name}`
// ===================
const userStreet = document.createElement('h5')
userStreet.textContent = `street: ${user.address.street}`

const userSuit = document.createElement('h5')
userSuit.textContent = `suit: ${user.address.suite}`

const userCity = document.createElement('h5')
userCity.textContent = `city: ${user.address.city}`

const userZipcode = document.createElement('h5')
userZipcode.textContent = `zipecode: ${user.address.zipcode}`


const 


    card.append(userName, userEmail,userPhone,userCompany, userStreet, userSuit,userCity,userZipcode)
    body.append(card)
   
});

}


