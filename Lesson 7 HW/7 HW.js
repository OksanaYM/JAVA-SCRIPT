// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(name, id, surname, email, phone){
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

};
let users =[
    new User('Olia', 1, 'Ivanova', 'ivanova@gmail.com', '+380987109883'),
    new User('Oksana', 2, 'Ivanova', 'oks@gmail.com', '+380987100883'),
    new User('Petro', 3, 'Ivanov', 'petro45@gmail.com', '+380966100083'),
    new User('Pavlo', 4, 'Ivanov', 'pavlo43@gmail.com', '+380987109883'),
    new User('Anton', 5, 'Ivanov', 'anton56@gmail.com', '+380967109683'),
    new User('Andrii', 6, 'Ivanov', 'andrii@gmail.com', '+380687109883'),
    new User('Anton', 7, 'Ivanov', 'anton@gmail.com', '+380987109844'),
    new User('Oleksandr', 8, 'Ivanov', 'oleks@gmail.com', '+380987105583'),
    new User('Olesia', 9, 'Ivanova', 'oleks@gmail.com', '+380987177883'),
    new User('Yurii', 10, 'Ivanov', 'yurii@gmail.com', '+380687199883')
]
console.log(users)
let user = new User('Olya', 2, 'Ivanova', 'ivanova@gmail.com', '+380987109883')


// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

let filterUser = users.filter(value => value.id %2 === 0);
console.log(filterUser)

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = users.sort((a, b) =>{
    return b.id - a.id
});
console.log(sort);

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//

function Client (id, name, surname, email, phone, order){
    this.id = id;
    this. name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clientArray = [
    new Client(1, 'Anton', 'Petrov', 'petrov@ukr.net', '+3805073040053',
        [{title: 'orange', price:60}, {title: 'banana', price: 65}, {title:'apple', price:45}, {title: 'carrot', price:40}]),
    new Client(2, 'Andrii', 'Ivanov', 'andr56@ukr.net', '+3805042064425',
        [{title: 'potato', price:35}, {title: 'carrot', price:40},{title:'orange', price:60}, {title:'apple', price:45}]),
    new Client(3, 'Oksana', 'Ivanova', '@ukr.net', '+3806753996636',
        [{title: 'orange', price:55}, {title:'cucumber', price:100}, {title:'apple', price:45}, {title:'potato', price:45}, {title:'banana', price:65}]),
    new Client(4, 'Olia', 'Petrova', 'olia@ukr.net', '+3806745983307',
        [{title: 'avocado', price:200}, {title:'carrot', price:35}]),
    new Client(5, 'Olia', 'Petrova', 'olich@ukr.net', '+3806674983305',
        [{title: 'potato', price:35}, {title:'apple', price:40}, {title: 'carrot', price:40}, {title:'apple', price:45}, {title: 'potato', price:40}, {title:'orange', price:60}, {title:'banana', price:65}]),
    new Client(6, 'Marta', 'Ivanova', 'marta@ukr.net', '+3806865329984',
        [{title: 'apple', price:35}, {title:'tomato', price:90}, {title:'potato', price:45}, {title:'banana', price:65}]),
    new Client(7, 'Maksym', 'Ivanov', 'mak@ukr.net', '+3809864090033',
        [{title: 'potato', price:40}, {title:'orange', price:60}, {title: 'carrot', price:40}]),
    new Client(8, 'Ivan', 'Ivanov', 'iv@ukr.net', '+3809867023371',
        [{title: 'avocado', price:210}, {title:'apple', price:45}]),
    new Client(9, 'Petro', 'Petrov', 'pet@ukr.net', '+3809754372272',
        [{title: 'orange', price:65}]),
    new Client(10, 'Ivan', 'Ivanov', '@ukr.net', '+3809876355533',
        [{title: 'carrot', price:45}, {title:'banana', price:65}, {title: 'potato', price:40}]),

];
console.log(clientArray);

//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)
//

let sortClient = clientArray.sort((pr1, pr2) =>{
    return pr1.order.length - pr2.order.length
});
console.log(sortClient);

//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт
//car
//
//
function Car(model, producer, yearProducer, maxSpeed, engineVolume ) {
    this.model = model;
    this.producer = producer;
    this.yearProducer = yearProducer;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function (){
       console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (let key in this) {
            console.log(key, this[key])
        }
        console.log(`${this.model} - ${this.yearProducer}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed >0) this.maxSpeed = newSpeed + this.maxSpeed;
    };
    this.changeYear = function (newValue) {
        if (newValue > 1815) this.yearProducer = newValue
    };
    this.addDriver = function (driver){
        if (driver) this.driverNew = driver

    };

}
let car = new Car('BMW', 'Germany', 2024, 250, 4);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2025);
car.addDriver('Andrii');
console.log(car);

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
    constructor(model, producer, yearProducer, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.yearProducer = yearProducer;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
        drive () {
            return `їдемо зі швидкістю ${this.maxSpeed} на годину`
        };
        info () {
            for (let key in this) {
                console.log( key, this[key])
            }
        };
        increaseMaxSpeed (newSpeed) {
            if (newSpeed >0) return this.maxSpeed = newSpeed + this.maxSpeed
        };
        changeYear (newValue) {
            if (newValue > 1815) return this.yearProducer = newValue
        };
        addDriver (driver) {
            if (driver) return this.driverOwn = driver
        }

}

let cars = new Cars('Škoda', 'Czech Republic', 2020, 200, 2.8);
console.log(cars);
console.log(cars.drive());
console.log(cars.info());
console.log(cars.increaseMaxSpeed(30));
console.log(cars.changeYear(2023));
console.log(cars.addDriver('Oksana'))


//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princess {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }

}


let princesses = [
    new Princess('Oksana', 24, 39),
    new Princess('Olia', 26,  37),
    new Princess('Marta', 28,  36),
    new Princess('Maria', 26,  37),
    new Princess('Olia', 17,  35),
    new Princess('Iryna', 20,  38),
    new Princess('Olia', 26,  37),
    new Princess('Natalia', 22,  40),
    new Princess('Olia', 24,  37),
    new Princess('Galyna', 23,  36),
];
console.log(princesses);
let prince = new Prince('Andrii', 30, 39);
console.log(prince);
for (let princessWife of princesses) {
    if (princessWife.footSize === prince.slipper){
        prince.wife = princessWife
    }
}
console.log(prince);

let wife = princesses.find(value => value.footSize === prince.slipper);
prince.wife = wife;
console.log(prince)

//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

function Products(title, price, produceCountry){
    this.title = title;
    this.price = price;
    this.produceCountry = produceCountry;

}


let products = [
    new Products( 'tomato', 100,  'Turkey'),
    new Products( 'milk',  60, 'Ukraine'),
    new Products('apple', 40,  'Ukraine'),
    new Products('carrot',  35,  'Ukraine'),
    new Products( 'cheese',  80,  'Poland'),
    new Products( 'lemon',  70,  'Turkey'),
    new Products('orange',  60,  'Spain'),
]


Products.prototype.filter = function (predicate) {
    let arr = [];
    for (const product of products) {
        if (predicate(product)) {
            arr.push(product)
        }
        return arr
    }
}
let result = products.filter((product) => product.produceCountry === 'Ukraine');
console.log(result)

products.forEach((value, index) =>console.log(value,index));

// Products.prototype.forEach = function (numbers){
//     let array = [];
//     for (let product of products) {
//         return `numbers: ${numbers}`
//     }
// }
//
// console.log(products.forEach.apply(product[50]))

Array.prototype.myForEach = function (callback){
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);

    }
};
[11, 22, 33].myForEach((x) => console.log(x));