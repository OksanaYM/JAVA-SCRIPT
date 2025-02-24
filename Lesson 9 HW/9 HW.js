// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
let div = document.createElement('div')
div.classList.add('main')
let div1 = document.createElement('div');
div1.classList.add('wrap');
div1.innerText = 'Hello, Oksana!';
let div2 = document.createElement('div');
div2.classList.add('collapse');
div2.innerText = 'Hello, Ann!'
let div3 = document.createElement('div');
div3.classList.add('alpha');
div3.innerText = 'Hello, Mary!'
let div4 = document.createElement('div');
div4.classList.add('beta');
div4.innerText = 'Hello, Antony!'
div.append(div1, div2, div3, div4)


let clone = div.cloneNode(true)
document.body.append(div, clone);


//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//

let menu = ['Main', 'Products', 'About us', 'Contacts']

let menuUl = document.createElement('ul');
menuUl.classList.add('menuUl')
for (const item of menu) {
    let menuLi = document.createElement('li');
    menuLi.innerText = item;
    menuUl.appendChild(menuLi)
}
document.body.appendChild(menuUl);


// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
function coursesFunction(arr) {
    let coursesDiv = document.createElement('div');
    coursesDiv.classList.add('courses');
    for (let item of arr) {
            let coursesH4 = document.createElement('h4');
            coursesH4.innerText = `Title: ${item.title}`;
            let coursesP = document.createElement('p');
            coursesP.innerText = `monthDuration: ${item.monthDuration};`;
            coursesDiv.append(coursesH4, coursesP);
    }
    document.body.appendChild(coursesDiv);
}
coursesFunction(coursesAndDurationArray);


// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let courseAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let courseDiv = document.createElement('div')
courseDiv.classList.add('item');
for (let courseDivItem of courseAndDurationArray) {
    let courseDivH1 = document.createElement('h1');
    courseDivH1.classList.add('heading')
    courseDivH1.innerText = courseDivItem.title;
    let courseDivP = document.createElement('p');
    courseDivP.classList.add('description')
    courseDivP.innerText = courseDivItem.monthDuration;
    courseDiv.append(courseDivH1, courseDivP)
}
document.body.appendChild(courseDiv)