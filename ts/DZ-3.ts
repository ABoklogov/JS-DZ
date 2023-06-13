// 1/3
// Задание
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:
// imgUrl - фотография, значение 'https://via.placeholder.com/640x480';
// descr - описание, значение 'Просторная квартира в центре';
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ['premium', 'promoted', 'top'].
// interface Apartment {
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: ('premium' | 'promoted' | 'top')[];
// };

// const apartment: Apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// 2 / 3
// Задание
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:
// name - имя владельца, значение 'Генри';
// phone - телефон, значение '982-126-1588';
// email - почта, значение 'henry.carter@aptmail.com'.
// interface Apartment {
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: ('premium' | 'promoted' | 'top')[];
//   owner: {
//     name: string;
//     phone: string;
//     email: string;
//   }
// };

// const apartment: Apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Генри',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
//   };

// 3 / 3
// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
// interface Apartment {
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: ('premium' | 'promoted' | 'top')[];
// };

// const apartment: Apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки

// 4 / 3
// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// interface Apartment {
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: ('premium' | 'promoted' | 'top')[];
//   owner: {
//     name: string;
//     phone: string;
//     email: string;
//   };
// };

// const apartment: Apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Пиши код выше этой строки

// 5 / 3
// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// interface Apartment {
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: ('premium' | 'promoted' | 'top')[];
// };

// const apartment: Apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки

// 6 / 3
// Задание
// Дополни код обновив значения свойств объекта apartment:
// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на 'Генри Сибола';
// массив тегов в свойстве tags добавив в конец строку 'trusted'.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };
// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');
// console.log(apartment.tags);

// 7 / 3
// Задание
// Добавь объекту apartment несколько новых свойств:
// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.
// interface Apartment {
//   imgUrl: string;
//   descr: string;
//   rating: number;
//   price: number;
//   tags: ('premium' | 'promoted' | 'top' | 'trusted')[];
//   owner: {
//     name: string;
//     phone: string;
//     email: string;
//   };
//   area?: number;
//   rooms?: number;
//   location?: {
//     country?: string;
//     city?: string;
//   };
// };

// const apartment: Apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };
// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Ямайка';
// apartment.location.city = 'Кингстон';

// 8 / 3
// Задание
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.
// const name: string = 'Ремонтный дроид';
// const price: number = 2500;
// const image: string = 'https://via.placeholder.com/640x480';
// const tags: string[] = ['on sale', 'trending', 'best buy'];
// const product = {
//   // Пиши код ниже этой строки
//   name,
//   price,
//   image,
//   tags,
//   // Пиши код выше этой строки
// };

// 9 / 3
// Задание
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
// Значением свойства email должна быть строка 'henry.carter@aptmail.com', а значением свойства password - строка 'jqueryismyjam'.
// const emailInputName = 'email';
// const passwordInputName = 'password';

// interface Credentials {
//   [key: string]: string;
// };

// const credentials: Credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
//   // Пиши код выше этой строки
// };

// console.log("🚀 ~ credentials:", credentials)
// 10 / 3
// Задание
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
// interface Apartment {
//   descr: string;
//   rating: number;
//   price: number;
// };

// const apartment: Apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };

// const keys: (string)[] = [];
// const values: (string | number)[] = [];
// // Пиши код ниже этой строки

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// };

// 11/3
// Задание
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// const keys: string[] = [];
// const values: (string | number)[] = [];
// const advert: { service: string } = {
//   service: 'apt',
// };

// interface Apartment {
//   descr: string;
//   rating: number;
//   price: number;
// };
// const apartment: Apartment = Object.create(advert);

// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Пиши код выше этой строки
// }


// 12 / 3
//     Задание
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
// type CountProps = (object: { [key: string]: any }) => number;

// const countProps: CountProps = function (object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   const values: any[] = [];

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       values.push(object[key]);
//     }
//   };

//   propCount = values.length;
//   // Пиши код выше этой строки
//   return propCount;
// };

// 13/3
// Задание
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// interface Apartment {
//   descr: string;
//   rating: number;
//   price: number;
// };

// const apartment: Apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };

// const values: (string)[] = [];

// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key])
// };

// 14 / 3
// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.
// type CountProps = (object: { [key: string]: (number | string) }) => number;

// const countProps: CountProps = function (object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   const values: (number | string)[] = [];

//   const keys = Object.keys(object);
//   for (const key of keys) {
//     values.push(object[key])
//   }
//   return propCount = values.length;
//   // Пиши код выше этой строки
// }
// console.log(countProps({ name: 'Mango', age: 2 }));  //возвращает 2

// 15 / 3
// Задание
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().
// interface Apartment {
//   descr: string;
//   rating: number;
//   price: number;
// };

// const apartment: Apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values: (string | number)[] = Object.values(apartment);

// 16/3
// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
// type CountTotalSalary = (salaries: {[key: string]: number}) => number;

// const countTotalSalary: CountTotalSalary = function (salaries) {
//   let totalSalary = 0;

//   // Пиши код ниже этой строки
//   const values = Object.values(salaries);
//   // console.log(values);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// };

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //возвращает 330.

// 17 / 3
// Задание
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
// type Colors = { hex: string, rgb: string }[];

// const colors: Colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors: string[] = [];
// const rgbColors: string[] = [];

// // Пиши код ниже этой строки
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// };

// 18 / 3
// Задание
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
// type Products = { name: string, price: number, quantity: number }[];

// const products: Products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// type ProductPrice = (productName: string) => (number | null);

// const getProductPrice: ProductPrice = function (productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   };
//   return null;
//   // Пиши код выше этой строки
// };

// console.log(getProductPrice('Радар'));// возвращает 1300.
// console.log( getProductPrice('Захват')); // возвращает 1200.

// 19 / 3
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// type Products = { name: string, price: number, quantity: number }[];

// const products: Products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// type GetAllProp = (propName: string) => (number | string)[];

// const getAllPropValues: GetAllProp = function(propName) {
//   // Пиши код ниже этой строки
//   const newArray: (number | string)[] = [];

//   for (const product of products) {
//     for (const key in product) {
//       if (key === propName) {
//         newArray.push(product[key]);
//       }
//     }
//   }

//   return newArray;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('quantity')); //возвращает [4, 3, 7, 9].
// console.log(getAllPropValues('price')); // возвращает [1300, 2700, 400, 1200].

// 20 / 3
// Задание
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
// type Products = { name: string, price: number, quantity: number }[];

// const products: Products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// type CalculateTotalPrice = (productName: string) => number;

// const calculateTotalPrice: CalculateTotalPrice = function (productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;

//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     };
//   };

//   return totalPrice;
//   // Пиши код выше этой строки
// };

// console.log(calculateTotalPrice('Бластер')); // возвращает 0.
// console.log(calculateTotalPrice('Радар')); // возвращает 5200.
// console.log(calculateTotalPrice('Дроид')); // возвращает 2800.
// console.log(calculateTotalPrice('Захват'));  //возвращает 10800.

// 21/3
// Задание
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.
// interface HighTemperatures {
//   [key: string]: number
// };

// const highTemperatures: HighTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const { yesterday, today, tomorrow } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22 / 3
// Задание
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды.Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures.Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// interface HighTemperatures {
//   yesterday: number;
//   today: number;
//   tomorrow: number;
//   icon?: string;
// };

// const highTemperatures: HighTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const { yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23 / 3
// Задание
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIco
// interface HighTemperatures {
//   yesterday: number;
//   today: number;
//   tomorrow: number;
//   icon?: string;
// };

// const highTemperatures: HighTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // Пиши код ниже этой строки
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24 / 3
// Задание
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
// type Colors = { hex: string, rgb: string }[];

// const colors: Colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors: string[] = [];
// const rgbColors: string[] = [];

// // Пиши код ниже этой строки
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// };

// 25 / 3
// Задание
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// type DataType = {
//   low: number;
//   high: number;
//   icon ?: string;
// };

// interface Forecast {
//   today: DataType;
//   tomorrow: DataType;
// };

// const forecast: Forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
//     today: {
//       low: lowToday,
//       high: highToday,
//       icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//     },
//     tomorrow: {
//       low: lowTomorrow,
//       high: highTomorrow,
//       icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//     },
// } = forecast;

// 26 / 3
// Задание
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast
// Пиши код ниже этой строки
// interface Forecast {
//   forecast: {
//     today: {
//       low: number,
//       high: number
//     },
//     tomorrow: {
//       low: number,
//       high: number
//     }
//   }
// };

// type CalculateMean = (Forecast) => number;

// const calculateMeanTemperature: CalculateMean = function (forecast) {
//   const {
//     today: {
//       low: todayLow,
//       high: todayHigh
//     },
//     tomorrow: {
//       low: tomorrowLow,
//       high: tomorrowHigh
//     }
//   } = forecast;
//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// };

// 27 / 3
// Задание
// В переменной scores хранится массив результатов тестирования.Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
// const scores: number[] = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// 28 / 3
// Задание
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
// type GroupScores = number[];

// const firstGroupScores: GroupScores = [64, 42, 93];
// const secondGroupScores: GroupScores = [89, 14, 51, 26];
// const thirdGroupScores: GroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// 29 / 3
// Задание
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.
// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.
// interface Settings {
//   theme?: 'light' | 'night';
//   public: boolean;
//   withPassword: boolean;
//   minNumberOfQuestions?: number;
//   timePerQuestion: number;
// };

// const defaultSettings: Settings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };

// const overrideSettings: Settings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};

// 30 / 3
// Задание
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
// interface TotalObj {
//   completed: boolean;
//   category: string;
//   priority: string;
// };

// type MakeTask = (data: { [key: string]: any }) => TotalObj;

// const makeTask: MakeTask = function (data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   return { completed, category, priority, ...data };
//   // Пиши код выше этой строки
// };

// console.log("🚀 ~ makeTask:", makeTask({ id: '1233', name: 'Mango' }))

// 31 / 3
// Задание
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// Пиши код ниже этой строки
// type Add = (...restParams: number[]) => number;

// const add: Add = function (...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   };
//   return total;
//   // Пиши код выше этой строки
// }
// console.log(add(32, 6, 13, 19, 8)); //возвращает 78.
// console.log(add(12, 4, 11, 48)); //возвращает 75.
// console.log(add(15, 27)); //возвращает 42.
// console.log(add(74, 11, 62, 46, 12, 36)); //возвращает 241.

// 32 / 3
// Задание
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
// Пиши код ниже этой строки
// type AddOverNum = (oneNumber: number, ...restParams: number[]) => number;

// const addOverNum: AddOverNum = function (oneNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > oneNumber) {
//       total += arg;
//     };
//   };
//   return total;
//   // Пиши код выше этой строки
// };

// 33 / 3
// Задание
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.
// Пиши код ниже этой строки
// type FindMatches = (array: number[], ...args: number[] ) => number[];

// const findMatches: FindMatches = function (array, ...args) {
//   const matches: number[] = []; // Не изменяй эту строку

//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   };
//   // Пиши код выше этой строки
//   return matches;
// };

// 34/3
// Задание
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 'Удаляем книгу <имя книги>', где <имя книги> это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// interface BookShelf {
//   books: string[];
//   getBooks(): string;
//   addBook(bookName: string): string;
//   removeBook(bookName: string): string;
//   updateBook(oldName: string, newName: string): string;
// };

// const bookShelf: BookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };

// 35/3
// Задание
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.
// interface BookShelf {
//   books: string[];
//   updateBook(oldName: string, newName: string): void;
// };

// const bookShelf: BookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// 41/3
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
// {
//   name: 'Дыхание дракона',
//   price: 700
// }

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// type Potion = { name: string, price: number };

// interface AtTheOldToad {
//   potions: Potion[];
//   getPotions(): Potion;
//   addPotion(newPotion: Potion): void;
//   removePotion(potionName: string): Potion;
//   updatePotionName(oldName: string, newName: string): Potion;
// };

// const atTheOldToad: AtTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],

//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       // console.log(potion);
//       if (potion.name === newPotion.name) {
//         return `Зелье ${newPotion} уже есть в инвентаре!`;
//       };
//       this.potions.push(newPotion);
//     };
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     };
//     return this.potions;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName
//       }
//     };
//     return this.potions;
//   },
//   // Пиши код выше этой строки
// }


// console.table(atTheOldToad.getPotions()); //возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].

// console.table(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 })) // в массиве potions последним элементом будет этот объект.
// console.table(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 })); // в массиве potions последним элементом будет этот объект.

// console.table(atTheOldToad.removePotion('Дыхание дракона')); //будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
// console.table(atTheOldToad.removePotion('Зелье скорости')); // будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].

// console.table(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));  //будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// console.table(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости')); //будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ].
