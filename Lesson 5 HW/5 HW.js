// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = (a, b) => a * b;
console.log(area(10,20) );

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) => Math.PI * r * r;
console.log(circle(10));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (h, r) => 2 * Math.PI * r *(h + r);
console.log(cylinder(3, 4));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let productsArray = ['tomato', 'orange', 'pineapple', 'apple', 'potato'];

let arrays = (array) => {
    for (const arrayElement of array){
        console.log(arrayElement);
    }
};
arrays(productsArray);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let pages = (text) => document.write(`<p>${text}</p>`);
pages('Hello');


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 let list = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
list('Hello, my name is Oksana');

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let lists = (text, number) => {
    document.write('<ul>')
    {
        for (let i = 0; i < number; i++) {
            document.write(`<li>${text}</li>`);
        }
    }
    document.write('</ul>')
}
lists('Octen School', 5)


// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let foobarFurniture = (arrayFurnitures) =>{
    document.write('<ul>');
    for (const furnitureItem of arrayFurnitures) {
        document.write(`<li>${furnitureItem}</li>`);
    }
    document.write('</ul>');
}
foobarFurniture (['cupboard', 'table', 'carpet', 'kitchen furniture']);
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let arrayFunction = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`)
    }
};
arrayFunction([
    {id:1, name: 'Petro', age: 30},
    {id:2, name: 'Anton', age: 18},
    {id:3, name: 'Pavlo', age: 35},
])
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let minNumber = (numbers) => {
    let min = numbers[0];
    for (let item of numbers){
        if (item < min){
            min = item;
        }
    }
    return min
}
console.log(minNumber([22, -3, 0, 100]));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13

let sumArr = (numberArray) => {
    let sum = 0
    for (const numberElement of numberArray) {
        if (numberElement > 0){
            sum = sum + numberElement
        }

    }
    return sum;
}
console.log(sumArr([1, 2, 10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) =>{
    let index = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = index;
    return arr
}
console.log(swap([11, 22, 33, 44], 0, 1));
//
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],
//     'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let result
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency)
            result = item;
    }
    let resultCurrency = sumUAH / result.value;
    return resultCurrency
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));