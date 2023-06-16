// 2 - 6
// type FilterArray = (numbers: number[], value: number) => ;

// const filterArray: FilterArray = function (numbers, value) {
//   const filteredNumbers: number[] = [];
//   // Пиши код ниже этой строки
//   numbers.forEach(num => {
//     if (num > value) {
//       filteredNumbers.push(num);
//     };
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5].

// 3 - 6
// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// type GetCommonElements = (firstArray: any[], secondArray: any[]) => any[];

// const getCommonElements: GetCommonElements = function (firstArray, secondArray) {
//   const commonElements: any[] = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach(num => {
//     if (secondArray.includes(num)) {
//       commonElements.push(num);
//     }
//   })

//   return commonElements;
//   // Пиши код выше этой строки
// };

// 9-6
// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
// type ChangeEven = (numbers: number[], value: number) => number[];

// const changeEven: ChangeEven = function (numbers, value) {
//   // Пиши код ниже этой строки
//   const newNumbers: number[] = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       element += value;
//     }
//     newNumbers.push(element);
//   })
//   return newNumbers;
//   // Пиши код выше этой строки
// };

// 15 - 6
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => (number % 2) === 0);
// const oddNumbers = numbers.filter(number => number % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);

// 17 - 6
// Задание
// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем(свойство author) которое совпадает со значением в переменной AUTHOR.
// interface Book {
//   readonly title: string;
//   readonly author: string;
//   readonly rating: number;
// };

// const books: Book[] = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// 20 - 6
// Задание
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// Пиши код ниже этой строки
// interface User {
//   readonly name: string;
//   readonly email: string;
//   readonly eyeColor: ('blue' | 'green' | 'brown');
//   readonly friends: string[];
//   readonly isActive: boolean;
//   readonly balance: number;
//   readonly gender: ('male' | 'female');
//   readonly age: number;
// };

// const users: User[] = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ];

// const friendName = 'Sharron Pace';

// type GetUsersWithFriend = (users: User[], friendName: string) => User[];

// const getUsersWithFriend: GetUsersWithFriend = (users, friendName) => {
//   return users.filter(user => {
//     const arrFrends = user.friends;
//     return arrFrends.includes(friendName)
//   })
// };
// // Пиши код выше этой строки

// console.log(getUsersWithFriend(users, friendName));

// 21 - 6
// Задание
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
interface User {
  readonly name: string;
  readonly email: string;
  readonly eyeColor: ('blue' | 'green' | 'brown');
  readonly friends: string[];
  readonly isActive: boolean;
  readonly balance: number;
  readonly gender: ('male' | 'female');
  readonly age: number;
};

const users: User[] = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]

// // Пиши код ниже этой строки
// type GetFriends = (users: User[]) => string[];

// const getFriends: GetFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
// };
// Пиши код выше этой строки

// 31 - 6
// Задание
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
// interface Player {
//   readonly name: string;
//   readonly playtime: number;
//   readonly gamesPlayed: number;
// };

// const players: Player[] = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   const onePlayTime = player.playtime / player.gamesPlayed;
//   return onePlayTime + total;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// 33 - 6
// Задание
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей(свойство friends) всех пользователей из массива users.

// Пиши код ниже этой строки
// type GetTotalFriendCount = (users: User[]) => number;

// const getTotalFriendCount: GetTotalFriendCount = users => {
//   return users.reduce((accum, user) => accum + user.friends.length, 0)
// };
// // Пиши код выше этой строки

// console.log(getTotalFriendCount(users));

// 39 - 6
// Задание
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

const sortByDescendingFriendCount = users => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length)
};

console.log(sortByDescendingFriendCount(users));

// 41 - 6
// Задание
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(name => name.author)
//     .sort((a, b) => a.localeCompare(b))
// console.log(names);

// 42 - 6
// Задание
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
// const getNamesSortedByFriendCount = users => {
//     return [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map(element => element.name)
// };

// console.log(getNamesSortedByFriendCount(users));

// 43 - 6
// Задание
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// const getSortedFriends = users => {
//     return users
//         .flatMap(user => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((a, b) => a.localeCompare(b))
// };

// console.log(getSortedFriends(users));

// 44 - 6
// Задание
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// const getTotalBalanceByGender = (users, gender) => {
//     return users
//         .filter(user => user.gender === gender)
//         .reduce((acc, total) => acc + total.balance, 0)

// };

// console.log(getTotalBalanceByGender(users, 'female'));

export { }