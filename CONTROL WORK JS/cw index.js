// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
//     котра має детальну інфорацію про об'єкт на який клікнули

let usersDiv = document.getElementById('users');
fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => {
        for (let user of users) {
            let usersInfoDiv = document.createElement('div')
            usersInfoDiv.classList.add('users-info-div')
            let userInfoH = document.createElement('h2')
            userInfoH.innerText = `
            ID: ${user.id}
            NAME: ${user.name}
            `
            let buttonInfo = document.createElement('button')
            buttonInfo.innerText = 'READ MORE'
            buttonInfo.onclick = function (){
                window.location.href = `user-details.html?id=${user['id']}`
            }
            usersInfoDiv.append(userInfoH, buttonInfo)
            usersDiv.appendChild(usersInfoDiv)
        }
    });
