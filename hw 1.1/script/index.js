// ======== Promise ===========

// const prm = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('akbar');

//         const aydin = {
//             status: 200,
//             server: 'itc',
//             port: 2222,

//         } 
//         resolve(aydin)
//         reject(aydin)
        
//     }, 2000)
// })



// prm.then((response) => {
//     console.log('promise resolve', response);
    
// })
    
// prm.catch((err) => {
// console.error(err);


// })

// // ==================================================
let API = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
    let req = await fetch(API);
    let res = await req.json();
    renderUser(res);
};

getUsers();

const renderUser = (users) => {
    users.forEach(user => {  // Используем 'user' вместо 'el'
        console.log(user);

        // Создаем контейнер для карточки
        const card = document.createElement('div');
        card.classList.add('card'); // Можно добавить класс для стилизации

        // Создаем и добавляем имя пользователя
        const Username = document.createElement('h2');
        Username.textContent = user.name;

        // Создаем и добавляем email
        const Useremail = document.createElement('h3');
        Useremail.textContent = user.email;

        // Создаем и добавляем информацию о улице
        const Userstreet = document.createElement('h3');
        Userstreet.textContent = `street: ${user.address.street}`;

        const userCity = document.createElement('h3')
        userCity.textContent = `city ${user.address.city}`

        const userZipcode = document.createElement('h3')
        userZipcode.textContent = `zipcode: ${user.address.zipcode}`

        const userSuite = document.createElement('h3')
        userSuite.textContent = `suite: ${user.address.suite}`


        // Добавляем элементы в карточку
        card.append(Username, Useremail, Userstreet, userZipcode, userSuite)

        // Добавляем карточку на страницу (в body или в какой-то контейнер)
        document.body.append(card);
    });
};


