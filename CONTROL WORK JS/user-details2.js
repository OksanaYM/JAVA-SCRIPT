// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
let detailsDiv = document.getElementById('user-details');
fetch (`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    .then(res => res.json())
    .then((users) => {
        for (let user of users) {
            let usersDetailsDiv = document.createElement('div')
            usersDetailsDiv.classList.add('users-details-div')
            function userAllDetails(user) {
                for (let usersKey in user) {
                    if (typeof user[usersKey] === 'object'){
                        let userInformationH = document.createElement('h5')
                        userInformationH.innerText = `${usersKey}:`
                        usersDetailsDiv.appendChild(userInformationH)
                        userAllDetails(user[usersKey]);
                    } else {
                        let userInformationH = document.createElement('h5')
                        userInformationH.innerText = `${usersKey}: ${user[usersKey]}`
                        usersDetailsDiv.appendChild(userInformationH)
                    }

                }
            }
            userAllDetails(user);

            let buttonInfo = document.createElement('button')
            buttonInfo.innerText = 'Post of current user'
            buttonInfo.onclick = function (){

                function getPosts(id){

                    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                        .then(response => response.json())
                        .then(posts => {
                            const postsContainer = document.getElementById('posts-container');
                            posts.forEach(post => {
                                let postCont = document.createElement('div')
                                postCont.classList.add('posts-main')
                                const postDiv = document.createElement('div');
                                postDiv.classList.add('posts');
                                postDiv.innerHTML =`
                                    <h4>Title:</h4> <p>${post.title}</p>`
                                let buttonPosts = document.createElement('button')
                                buttonPosts.innerText = 'POST DETAILS'
                                buttonPosts.onclick = function (){
                                    location.href = `post-details.html?id=${id}&postId=${post.id}`
                                }
                                postCont.append(postDiv, buttonPosts);
                                postsContainer.appendChild(postCont)
                            });
                            buttonInfo.classList.add('disable')
                        });
                }

                return getPosts(user['id'])
            }
            usersDetailsDiv.appendChild(buttonInfo)
            detailsDiv.appendChild(usersDetailsDiv)
        }
    });
