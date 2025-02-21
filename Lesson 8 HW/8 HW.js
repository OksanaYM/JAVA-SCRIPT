// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function copy(objUser) {
    if (objUser){
        let objFunctions = [];
        for (let objKey in objUser) {
            if (typeof objUser[objKey] === 'function'){
                let cloneObjUser = objUser[objKey].bind({});
                objFunctions.push({cloneObjUser, objKey})
            }
        }
        console.log(objFunctions)
        let jsonUser = JSON.stringify(objUser);
        let parse = JSON.parse(jsonUser);
        for (const objItem of objFunctions) {
            parse[objItem.key] = objItem.cloneObjUser
        }
        console.log(parse)
        return parse
    }
    throw new Error('!!!!!')
}
let clone = copy(users = {name:'Anna', age: 25, func(){console.log('Hi!!!')}, greeting() {console.log('hello')}});
console.log(clone);
copy(null);
copy(undefined);

// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

console.log(coursesAndDurationArray.map((value, index) => ({id: index+1, ...value})));