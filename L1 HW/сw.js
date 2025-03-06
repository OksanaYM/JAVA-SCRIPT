// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
// let url = new URLSearchParams(window.location.search)
// let userId = url.get('id')
// let detailsDiv = document.getElementById('userDetails');
// fetch (`https://jsonplaceholder.typicode.com/users`)
//     .then(res => res.json())
//     .then((users) => {
//         for (let user of users) {
//             let usersDetailsDiv = document.createElement('div')
//             usersDetailsDiv.classList.add('usersDetailsDiv')
//             for (let usersKey in user) {
//                 if (typeof user[usersKey] === 'object'){
//                     let keyDetail = document.createElement('div')
//                     let title = document.createElement('h4')
//                     title.innerText = usersKey
//                     let divKey = document.createElement('div')
//                         for (let usKey in user[usersKey]) {
//                             if (typeof user[usersKey][usKey] === 'object') {
//                                 let userKey3 = document.createElement('h4')
//                                 userKey3.innerText = `${usKey}: `
//                                 divKey.appendChild(userKey3)
//                                 for (let usKey2 in user[usersKey][usKey]) {
//                                     let userKey = document.createElement('h4')
//                                     userKey.innerText = `${usKey2}: ${user[usersKey][usKey][usKey2]}`
//                                     divKey.appendChild(userKey)
//                                 }
//                             } else {
//                                 let userKey = document.createElement('h4')
//                                 userKey.innerText = `${usKey}: ${user[usersKey][usKey]}`
//                                 divKey.appendChild(userKey)
//                             }
//
//                         }
//                     keyDetail.append(title, divKey)
//                     usersDetailsDiv.appendChild(keyDetail)
//                 } else {
//                     let userInformationH = document.createElement('h4')
//                     userInformationH.innerText = `${usersKey}: ${user[usersKey]}`
//                     usersDetailsDiv.appendChild(userInformationH)
//                 }
//             }
//             let buttonInfo = document.createElement('button')
//             buttonInfo.classList.add('buttonInfo')
//             buttonInfo.innerText = 'Post of current user'
//             debugger
//             buttonInfo.onclick = function (){
//                 debugger
//                 window.location.href = `post-details.html?id=${user['id']}`
//             }
//             usersDetailsDiv.appendChild(buttonInfo)
//             detailsDiv.appendChild(usersDetailsDiv)
//         }
//     });

// const urlParams = new URLSearchParams(window.location.search);
// const userId = urlParams.get('id');
// let detailsDiv = document.getElementById('user-details');
// fetch (`https://jsonplaceholder.typicode.com/users?id=${userId}`)
//     .then(res => res.json())
//     .then((users) => {
//         let usersDetailsDiv = document.createElement('div')
//         usersDetailsDiv.classList.add('users-details-div')
//         for (let user of users) {
//             function userAllDetails(user) {
//                 for (let usersKey in user) {
//                     if (typeof user[usersKey] === 'object'){
//                         let userInformationH = document.createElement('h5')
//                         userInformationH.innerText = `${usersKey}:`
//                         usersDetailsDiv.appendChild(userInformationH)
//                         userAllDetails(user[usersKey]);
//                     } else {
//                         let userInformationH = document.createElement('h5')
//                         userInformationH.innerText = `${usersKey}: ${user[usersKey]}`
//                         usersDetailsDiv.appendChild(userInformationH)
//                     }
//
//                 }
//             }
//             userAllDetails(user);
//
//             let buttonInfo = document.createElement('button')
//             buttonInfo.innerText = 'Post of current user'
//             buttonInfo.onclick = function (){
//                 function getPosts(id){
//
//                     fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
//                         .then(response => response.json())
//                         .then(posts => {
//                             const postsContainer = document.getElementById('posts-container');
//                             posts.forEach(post => {
//                                 let postCont = document.createElement('div')
//                                 postCont.classList.add('posts-main')
//                                 const postDiv = document.createElement('div');
//                                 postDiv.classList.add('posts');
//                                 postDiv.innerHTML =`
//                                     <h4>Title:</h4> <p>${post.title}</p>`
//                                 let buttonPosts = document.createElement('button')
//                                 buttonPosts.innerText = 'POST DETAILS'
//                                 buttonPosts.onclick = function (){
//                                     window.location.href = `post-details.html?id=${id}&postId=${post.id}`
//                                 }
//                                 postCont.append(postDiv, buttonPosts);
//                                 postsContainer.appendChild(postCont)
//                             });
//                             buttonInfo.remove()
//                         });
//                 }
//
//                 return getPosts(user['id'])
//             }
//             usersDetailsDiv.appendChild(buttonInfo)
//             detailsDiv.appendChild(usersDetailsDiv)
//         }
//     });
