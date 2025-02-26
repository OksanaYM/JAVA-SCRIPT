// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
//

let buttonN = document.getElementsByTagName('button')[0]
buttonN.onclick = function (){
    document.getElementById('text').remove()
}

//  #j693ca8
//  - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//  інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let ageForm = document.forms.age;
let ageTo18 = document.getElementById('ageTo18')

ageForm.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    let ageFromInput = ageForm.age.value
        if (ageFromInput < 18){
            ageTo18.innerText = 'Age < 18 years'
        } else {
            ageTo18.innerText = 'Age > 18 years'
        }

})
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з
// вашим об'єктом
//

let infoForm = document.forms.info;
let infoUsers = document.getElementById('infoUser')

infoForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let nameInfo = infoForm.name.value;
    let surnameInfo = infoForm.surname.value;
    let ageInfo = infoForm.age.value;
    let objInfo = {nameInfo, surnameInfo, ageInfo};
    console.log(objInfo);
    infoUsers.innerText = objInfo.nameInfo + ' ' + objInfo.surnameInfo + ' ' + objInfo.ageInfo
});

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1
//
let resultNum = +localStorage.getItem('number');
resultNum += 1
localStorage.setItem('number', resultNum)
document.getElementById('numbers').innerText = resultNum

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList
// зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в
// консоль, а малювати в DOM
//

let sessionsList;
if (localStorage.getItem('sessionsList')){
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'))
} else {
    sessionsList = []
}
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList))

let sessionsList2 = JSON.parse(localStorage.getItem('sessionsList'));
for (let sessionsListElement of sessionsList2) {
    let sessionsP = document.createElement('p');
    sessionsP.innerText = sessionsListElement.toString();
    document.body.appendChild(sessionsP)
}

// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок
//
let kgForm = document.forms.kg;
let lb = document.getElementById('kgAndLb');
kgForm.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    let kgFromInput = kgForm.kg.value;
    lb.innerText = kgFromInput / 0.45359237
})


let inputForm = document.getElementById('kgTo');
let lbResult = document.getElementById('lbFromKg');
inputForm.oninput = function (){
    let kgToLb = +this.value;
    let resultKg = kgToLb * 2.20462262;
    lbResult.innerText = resultKg

}

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage
// та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


function addToLocalStorage(arrayName, objToAdd){
    let array = JSON.parse(localStorage.getItem(arrayName));
    if (!array){
        throw new Error('This is not array!')
    }
    if (typeof objToAdd === "object"){
        array.push(objToAdd)
    }
    localStorage.setItem(arrayName, JSON.stringify(array))
}
addToLocalStorage('sessionsList', {})

//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let tableInput = document.forms.table;
let lineNumber = document.getElementById('tableResult')
tableInput.onsubmit = function (ev) {
    ev.preventDefault();
    let linesNumber = +tableInput.lineNumber.value
    let squaresNumber = +tableInput.squareNumber.value
    let contents = tableInput.content.value
    for (let i = 0; i < linesNumber; i++) {
        let lineResult = document.createElement('tr')
        for (let i = 0; i < squaresNumber; i++) {
            let squareResult = document.createElement('td')
            squareResult.innerText = contents
            lineResult.appendChild(squareResult)
        }
        lineNumber.appendChild(lineResult);
    }

}
//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині
// якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


let resultUAH = +localStorage.getItem('numbers');
resultUAH +=10
localStorage.setItem('numbers', resultUAH)
document.getElementById('uah').innerText = `${resultUAH} UAH`

//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

class NameAr{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
let names = [
    new NameAr('Oksana', 30),
    new NameAr('Oksana', 30),
    new NameAr('Oksana', 30),
    new NameAr('Oksana', 30),
    new NameAr('Oksana', 30),
    new NameAr('Olia', 35),
    new NameAr('Olia', 35),
    new NameAr('Olia', 35),
    new NameAr('Olia', 35),
    new NameAr('Olia', 35),
    new NameAr('Andrii', 35),
    new NameAr('Andrii', 35),
    new NameAr('Andrii', 35),
    new NameAr('Andrii', 35),
    new NameAr('Andrii', 35)
]
let endName = document.getElementById('name')
let buttonPrev = document.getElementById('prev');
buttonPrev.onclick = function() {
    for (let i = 0; i < names.length; i++) {
        let stringifyNames = JSON.stringify(names)
        endName.innerText = stringifyNames
    }
}
let buttonNext = document.getElementById('next');
buttonNext.onclick = function() {
    for (let i = 0; i < names.length; i++) {
        let stringifNames = JSON.stringify(names)
        endName.innerText = stringifNames
    }
}
