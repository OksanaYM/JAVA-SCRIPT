
let time = 15;
if ( time >=0 && time < 15 ) {
    console. log('1/4 time');
} else if (time >=15 && time < 30) {
    console.log('2/4 time');
} else if (time >= 30 && time < 45) {
    console.log('3/4 time');
} else if (time >= 45 && time < 59 ) {
    console.log('4/4 time');
}

// #UMoNq4biWGe ------------------------------------------------

let day = 20;
if ( day >= 1 && day <= 10) {
    console.log('1/3 day');
} else if ( day > 10 && day <= 20) {
    console.log('2/3 day');
} else if ( day > 20 && day <= 31) {
    console.log('3/3 day');
}

// #KzrtqyQ ----------------------------------------------------------

switch ('7') {
    case '1':
        console.log('learn JS,play with kids, prepare meal, lesson JS');
        break;
    case '2':
        console.log('learn JS,play with kids')
        break;
    case '3':
        console.log('learn JS,play with kids, lesson JS')
        break;
    case '4':
        console.log('learn JS,play with kids, prepare meal')
        break;
    case '5':
        console.log('learn English, learn JS, play with kids, lesson JS')
        break;
    case '6':
        console.log('lesson English, learn JS, play with kids, prepare meal, clean the house')
        break;
    case '7':
        console.log('go to church, learn JS, play with kids')
        break;
}

// #uwsz1RnTQJ1 ------------------------------------------------------------------------
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let number1 = 5;
let number2 = 7;
if(number1 > number2) {
    console.log(number1);
} else if(number1 === number2) {
    console.log(number1=number2);
} else {
    console.log(number2);
}
// #iBvqtjEm ---------------------------------------------------------------------------------
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = ('Octen');
if (x === 0) {
    console.log('default');
} else if (x === null) {
    console.log('default');
} else if (x === false) {
    console.log('default');
} else if (x === undefined) {
    console.log('default');
} else {
    console.log(x);
}

// #awLXL6TBzg --------------------------------------------------------------------
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
];

if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log('Super!');
} else {
    console.log('< 5 month');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!');
} else {
    console.log('< 5 month');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!');
} else {
    console.log('< 5 month');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!');
} else {
    console.log('< 5 month');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!');
} else {
    console.log('< 5 month');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!');
} else {
    console.log('< 5 month');
}