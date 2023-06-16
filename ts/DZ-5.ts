// 1-5
// Задание
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
// interface Parent {
//   name: string;
//   surname: string;
//   age: number;
//   heritage: string;
// };

// const parent: Parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child: Parent = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// 2 - 5
// Задание
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.
// interface Ancestor {
//   name: string;
//   age: number;
//   surname: string;
//   heritage: string;
// };

// const ancestor: Ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent: Ancestor = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child: Ancestor = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// Пиши код выше этой строки

// 3 - 5
// Задание
// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// class Car {
//   brand: string;
//   model: string;
//   price: number;

//   constructor(brand: string, model: string, price: number) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// };

// const newCar = new Car('Audi', 'Q3', 36000);
// console.log(newCar) // получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.);

// 4 - 5
// Задание
// Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) функции.
// interface Params {
//   brand: string;
//   model: string;
//   price: number;
// };

// class Car {
//   brand: string;
//   model: string;
//   price: number;

//   constructor({ brand, model, price }: Params) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   };
// };

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// console.log(audi);

// 5 - 5
// Задание
// Добавь в свойство prototype функции-конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// interface Params {
//   brand: string;
//   model: string;
//   price: number;
// };

// class Car {
//   public brand: string;
//   public model: string;
//   public price: number;

//   constructor({ brand, model, price }: Params) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   };

//   public getPrice(): number {
//     return this.price;
//   };

//   public changePrice(newPrice: number): number {
//     return this.price = newPrice;
//   };
// };

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

// console.log(audi.getPrice());
// console.log(audi.changePrice(5));

// 6 - 5
// Задание
// С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// function Storage(items) {
//   this.items = items;
// }

// class Storage {
//   private items: string[];

//   constructor(items: string[]) {
//     this.items = items;
//   };

//   public getItems(): string[] {
//     return this.items;
//   };

//   public addItem(newItem: string): void {
//     this.items.push(newItem);
//   };

//   public removeItem(item: string): void {
//     for (let i = 0; i < this.items.length; i += 1) {
//       if (this.items[i] === item) {
//         this.items.splice(i, 1)
//       }
//     };
//   };
// };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// 7 - 5
// Задание
// С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

// class StringBuilder {
//   private value: string;

//   constructor(baseValue: string) {
//     this.value = baseValue;
//   };

//   public getValue(): string {
//     return this.value;
//   };

//   public padEnd(str: string): void {
//     this.value = `${this.value}${str}`;
//   };

//   public padStart(str: string): void {
//     this.value = `${str}${this.value}`;
//   };

//   public padBoth(str: string): void {
//     this.value = `${str}${this.value}${str}`;
//   };
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// 11 - 5
// Задание
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.
// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
// interface Params {
//   brand: string;
//   model: string;
//   price: number;
// };

// class Car {
//   #brand: string;
//   public model: string;
//   public price: number;

//   // #brand;
//   constructor({ brand, model, price }: Params) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   };

//   getBrand(): string {
//     return this.#brand;
//   };

//   changeBrand(newBrand: string): void {
//     this.#brand = newBrand;
//   };
// };

// 12 - 5
// Задание
// Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// class Storage {
//   #items;

//   constructor(items: string[]) {
//     this.#items = items;
//   };

//   public getItems(): string[] {
//     return this.#items;
//   };

//   public addItem(newItem: string): void {
//     this.#items.push(newItem);
//   };

//   public removeItem(item: string): void {
//     const itemIndex = this.#items.indexOf(item);

//     this.#items.splice(itemIndex, 1);
//   };
// };

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// 13 - 5
// Задание
// Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
// class StringBuilder {
//   private value: string;

//   constructor(baseValue: string) {
//     this.value = baseValue;
//   };

//   public getValue(): string {
//     return this.value;
//   };

//   public padEnd(str: string): void {
//     this.value += str;
//   };

//   public padStart(str: string): void {
//     this.value = str + this.value;
//   };

//   public padBoth(str: string): void {
//     this.padStart(str);
//     this.padEnd(str);
//   };
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// 14 - 5
// Задание
// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.
// interface Params {
//   model: string;
//   brand: string;
//   price: number;
// };

// class Car {
//   #model: string;
//   #brand: string;
//   #price: number;

//   constructor({ brand, model, price }: Params) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   };

//   get brand(): string {
//     return this.#brand;
//   };

//   set brand(newBrand: string) {
//     this.#brand = newBrand;
//   };

//   get model(): string {
//     return this.#model;
//   };

//   set model(newModel: string) {
//     this.#model = newModel;
//   };

//   get price(): number {
//     return this.#price;
//   };

//   set price(newPrice: number) {
//     this.#price = newPrice;
//   };
// };

// 15 - 5
// Задание
// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.
// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.
// interface Params { price: number };

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price: number;

//   constructor({ price }: Params) {
//     this.#price = price;
//   };

//   get price(): number {
//     return this.#price;
//   };

//   set price(newPrice: number) {
//     if (newPrice > Car.MAX_PRICE) {
//       return;
//     };

//     this.#price = newPrice;
//   };
//   // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// 16 - 5
// Задание
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).
// interface Params { price: number };

// class Car {
//   static #MAX_PRICE = 50000;
//   public price: number;

//   // Пиши код ниже этой строки
//   static checkPrice(price: number): string {
//     if (price > Car.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.';
//     }
//     return 'Всё хорошо, цена в порядке.';
//   };
//   // Пиши код выше этой строки
//   constructor({ price }: Params) {
//     this.price = price;
//   };
// };

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// 17 - 5
// Задание
// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.
// class User {
//   #email: string

//   constructor(email: string) {
//     this.#email = email;
//   };

//   get email(): string {
//     return this.#email;
//   };

//   set email(newEmail: string) {
//     this.#email = newEmail;
//   };
// };
// // Пиши код ниже этой строки
// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// };

// 18 - 5
// Задание
// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойсво accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin, мы добавили инициализацию экземпляра под объявлением класса.
// class User {
//   #email: string;

//   constructor(email: string) {
//     this.#email = email;
//   };

//   get email(): string {
//     return this.#email;
//   };

//   set email(newEmail: string) {
//     this.#email = newEmail;
//   };
// };

// interface Params { email: string, accessLevel: string };

// class Admin extends User {
//   // Пиши код ниже этой строки
//   public accessLevel: string;

//   constructor({ email, accessLevel }: Params) {
//     super(email);
//     this.accessLevel = accessLevel;
//   };

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   // Пиши код выше этой строки
// };

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// 19 - 5
// Задание
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
// class User {
//   #email: string;

//   constructor(email: string) {
//     this.#email = email;
//   };

//   get email(): string {
//     return this.#email;
//   };

//   set email(newEmail: string) {
//     this.#email = newEmail;
//   };
// };

// interface Params { email: string, accessLevel: string };

// class Admin extends User {
//   // Пиши код ниже этой строки
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   public accessLevel: string;
//   public blacklistedEmails: string[] = [];

//   constructor({ email, accessLevel }: Params) {
//     super(email);
//     this.accessLevel = accessLevel;
//   };

//   blacklist(email: string): void {
//     this.blacklistedEmails.push(email);
//   };

//   isBlacklisted(email: string): boolean {
//     return this.blacklistedEmails.includes(email);
//   };
//   // Пиши код выше этой строки
// };

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// export { }