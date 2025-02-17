// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool'
console.log(str3.length);


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
console.log(a.toUpperCase());
let b = 'lorem ipsum';
console.log(b.toUpperCase());
let c = 'javascript is cool';
console.log(c.toUpperCase());


// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let aa = 'HELLO WORLD';
console.log(aa.toLowerCase());
let bb = 'LOREM IPSUM';
console.log(bb.toLowerCase());
let cc = 'JAVASCRIPT IS COOL';
console.log(cc.toLowerCase());

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.replace(' ', ''));

let string = ' dirty string   ';
let s = string.trim();
console.log(s);

//
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//

function stringToarray (str){
    if (str) {
        return str.split(' ');
    }
    return [''];
}
let text = 'Ревуть воли як ясла повні';
console.log(stringToarray(text));


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
let arrMap = arr.map(value => {
    return value + ''
});
console.log(arrMap);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11,21,3];
function sortNums (numsArray, direction){
    if (direction === 'ascending'){
         return numsArray.sort((a, b)=> a - b);
    } else if (direction === 'descending'){
         return numsArray.sort((a, b)=> b - a);
    } else {
         return numsArray;
    }
}
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


let coursesSort = coursesAndDurationArray.sort((u1, u2)=> {
    return u2.monthDuration - u1.monthDuration
});
console.log(coursesSort);

function userFilter(array) {
    for (const item of array) {
        if (item.monthDuration > 5){
            console.log(item)
        }
    }
}
userFilter(coursesAndDurationArray);


let usersFilter=coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(usersFilter);

let usersMap = coursesAndDurationArray.map(function (value, index) {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
})
console.log(usersMap)

// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//

let cardSuit =['spade', 'diamond', 'heart', 'clubs'];
let valueCard = ['6', '7','8', '9', '10', 'ace', 'jack', 'queen', 'king'];
//     color:'', // 'red','black'


for (let item of cardSuit) {
    for (let item2 of valueCard) {
       if (item2 !== 'jack') {
           console.log(`${item2} ${item}`)
       }
    }
}

for (let itemCard of cardSuit) {
    for (let itemCard2 of valueCard) {
        if (itemCard2 === '6') {
            console.log(`${itemCard2} ${itemCard}`)
        }
    }
}

let oneCard = [];
for (let suit of cardSuit) {
    for (let value of valueCard) {
        const card = {suitCard: suit, value: value };
        if (suit === 'diamond' || suit === 'heart'){
            card.color = 'red';
        } else {
            card.color = 'black'
        }
        oneCard.push(card);
    }
}
console.log(oneCard);

console.log(oneCard.find(card => card.value === 'ace' && card.suitCard === 'spade'));

console.log(oneCard.filter(card => card.value === '6'));

console.log(oneCard.filter(card => card.color === 'red'));

console.log(oneCard.filter(card => card.suitCard === 'diamond'));

console.log(oneCard.filter(card => card.suitCard === 'clubs' && (card.value === '10' || card.value === 'ace' || card.value === 'jack' || card.value === 'queen' || card.value ==='king' )));

//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = oneCard.reduce((accum, card) => {
    switch (card.suitCard) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'clubs':
            accum.clubs.push(card);
            break;

    }

    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []

});

console.log(reduce);
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(courses => {
    return courses.modules.includes('sass')
}));
console.log(coursesArray.filter(courses => {
    return courses.modules.includes('docker')
}));