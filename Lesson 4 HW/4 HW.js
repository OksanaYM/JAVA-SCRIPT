// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaFunction(length1, length2) {
    return length1 * length2
}
let number = areaFunction(20, 30);
console.log(number);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S = πr2, де π = 3,14, r – радіус круга.
 function circleFunction(r) {
    return 3.14 * r
 }
let numberCircle = circleFunction(10);
console.log(numberCircle)
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//     2πR(H + R),
function cylinderFunction (r, h) {
    return 2 * Math.PI* r *(h + r)
}
console.log(cylinderFunction(3,5));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayFunction (array, ...arrayElements) {
    console.log(arrayElements);
}
arrayFunction('products', 'tomato', 'orange', 'pineapple', 'apple')
// or
productsArray = ['tomato', 'orange', 'pineapple', 'apple', 'potato'];

function foobar(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
foobar(productsArray);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

function pageFunction(text) {
    document.write(`<p>${text}</p>`);
}
pageFunction('Hello, my name is Oksana');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий








// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та
// виводить його через document.write






// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write




// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.



//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву




// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13





// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]




// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400