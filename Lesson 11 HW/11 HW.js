// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//


let cartsDiv = document.getElementById('product')
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((cartsArr) => {
        let {carts} = cartsArr
        for (let cart of carts) {
            let productDiv = document.createElement('div');
            let informCart = document.createElement('div')
            informCart.innerText = `Id: ${cart.id} Total:${cart.total} DiscountedTotal:${cart.discountedTotal} UserId:${cart.userId} TotalProducts:${cart.totalProducts} TotalQuantity:${cart.totalQuantity}`
            let listProduct = document.createElement('ul')
            for (let product of cart.products) {
                let liProduct = document.createElement('li')
                liProduct.innerText = `
                            id: ${product.id},
                            title: ${product.title},
                            price: ${product.price},
                            quantity: ${product.quantity},
                            total: ${product.total},
                            discountPercentage: ${product.discountPercentage},
                            discountedTotal: ${product.discountedTotal},
                            
                `
                let img = document.createElement('img')
                img.src = product.thumbnail
                liProduct.appendChild(img)
                listProduct.appendChild(liProduct)
                }
            productDiv.append(informCart, listProduct)
            cartsDiv.appendChild(productDiv)
            }
    })

//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// // Інгредієнти повинні бути список під час відображення.
let recipeDivMain = document.getElementById('recipes')
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesArr =>{
        let {recipes} = recipesArr
        for (let recipe of recipes) {
           let recipesDiv = document.createElement('div')
            for (const recipesKey in recipe) {
                if (Array.isArray(recipe[recipesKey])){
                    let arrayDiv = document.createElement('div')
                    let title = document.createElement('div')
                    title.innerText = recipesKey
                    let ol = document.createElement('ol')
                    let recipeArray = recipe[recipesKey]
                    for (let arrayItem of recipeArray) {
                        let li = document.createElement('li')
                        li.innerText = arrayItem
                        ol.appendChild(li)

                    }
                    arrayDiv.append(title, ol)
                    recipesDiv.appendChild(arrayDiv)
            }else{
                    let keyDiv = document.createElement('div')
                    keyDiv.innerText = `${recipesKey}: ${recipe[recipesKey]}`
                    recipesDiv.appendChild(keyDiv)
                }

            }

        recipeDivMain.appendChild(recipesDiv)
        }
    });