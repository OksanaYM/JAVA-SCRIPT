// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
const postId = urlParams.get('postId');
const postsContainer = document.getElementById('posts-details');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts?id=${postId}`)
    .then(response => response.json())
    .then(posts => {
        for (let post of posts) {
            let postContain = document.createElement('div')
            postContain.classList.add('post-detail')
            function postFunction(post) {
                for (let postKey in post) {
                    let postAll = document.createElement('h5')
                    postAll.innerText = `
                    ${postKey}: ${post[postKey]}`
                    postContain.appendChild(postAll)
                }

            }
            postFunction(post)
            postsContainer.appendChild(postContain)
        }
    })
let commentsPostUser = document.getElementById('comments')
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (let comment of comments) {
            let postComment = document.createElement('div')
            postComment.classList.add('post-comment')

            function commentFunction(comment) {
                for (let commentKey in comment) {
                    let commentAll = document.createElement('div')
                    commentAll.innerText = `${commentKey}: ${comment[commentKey]}`
                    postComment.appendChild(commentAll)

                }
            }
            commentFunction(comment)
            commentsPostUser.appendChild(postComment)
        }


    })

