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
    return 3.14 * r * r
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

function arrayFunction (product, ...productElements) {
    console.log(productElements);
}
arrayFunction('products', 'tomato', 'orange', 'pineapple', 'apple')
// or
let productsArray = ['tomato', 'orange', 'pineapple', 'apple', 'potato'];

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
function listFunction(line1, line2, line3) {
    document.write(`<ul>
           <li>${line1}</li>
           <li>${line2}</li>
           <li>${line3}</li>
           </ul>`);
}
listFunction('Hello-1', 'Hello-2', 'Hello-3');

function listFunction1(line) {
    document.write(`<ul>
           <li>${line}</li>
           <li>${line}</li>
           <li>${line}</li>
           </ul>`);
}
listFunction1('Hello-1');

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та
// виводить його через document.write
function liFunction (text, number) {
    for (let i = 0; i < number; i++) {
        document.write(`<ul><li>${text}</li></ul>`);
    }
}
liFunction('Octen school', 10);



function lineNumberFunction (parag, number) {
    document.write('<ul>')
        for (let i = 0; i < number; i++) {
            document.write(`<li>${parag}</li>`);
        }
    document.write('</ul>')

}
lineNumberFunction('!!!Octen!!!', 10)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

//
function arrayFurnitureFunction(furnItem, ...functionFurnitureElements) {
    document.write(`${furnItem} = [ <ul>`);
        for (let i = 0; i < functionFurnitureElements.length; i++) {
            const furniture = functionFurnitureElements[i];
            document.write(`<li>${furniture}</li>`);
        }
        document.write(`</ul> ]`);
}
arrayFurnitureFunction('furnitures', 'table', 'sofa', 'cupboard', 'chair' )

function foobarFurniture (arrayFurnitures){
    document.write(`<ul>`);
    for (const furnitureItem of arrayFurnitures) {
        document.write(`<li>${furnitureItem}</li>`);
    }
    document.write(`</ul>`);
}
foobarFurniture (  ['cupboard', 'table', 'carpet', 'kitchen furniture'])

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function userFunction1 (code, firstName, year){
        document.write(`<div>id: ${code}; name: ${firstName}; age: ${year};</div>`)
    }

userFunction1(1, 'Andrii', 35 );
userFunction1(2,'Oksana', 30);

function userFunction2 (informations){
    for (let information of informations) {
        document.write(`<div>${information.id} ${information.name} ${information.age}</div>`)
    }
}
userFunction2([
    {id:1, name: 'Petro', age: 30},
    {id:2, name: 'Anton', age: 18},
    {id:3, name: 'Pavlo', age: 35},
])

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function numbers(arrayNumbers){
    let min = arrayNumbers[0];
    for (let number of arrayNumbers) {
        if (number < min) {
            min = number
        }

    }
    return min
}
console.log(numbers([8, 5, 7, 2, 9, 11]))

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(arr) {
    let calc = 0;
    for (let arrCalcElement of arr) {
        if (arrCalcElement > 0 ) {
            calc = calc + arrCalcElement;
        }
    }
    return calc;
}
console.log(sum([1, 2, 10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap (arr, index1, index2) {
    let index = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = index;
    return arr;
}
console.log(swap([11,22,33,44],0,1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeUSDEUR;
    for (let element of currencyValues) {
        if (element.currency === exchangeCurrency){
            exchangeUSDEUR = element;
        }
    }
    let exchangeResult = sumUAH / exchangeUSDEUR.value;
    return exchangeResult;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))