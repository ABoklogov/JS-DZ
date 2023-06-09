// // 11/2
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
// type CalculateEngravingPrice = (message: string, pricePerWord: number) => number;

// const calculateEngravingPrice: CalculateEngravingPrice = function(message, pricePerWord) {
//   // Пиши код ниже этой строки
// const array = message.split(' ');
// const arrayLength = array.length;
// return arrayLength * pricePerWord;
//   // Пиши код выше этой строки
// }
// const total = calculateEngravingPrice('JavaScript у меня в крови', 10);
// console.log("🚀 ~ total:", total)


// 12/2
// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.
// type MakeStringFromArray = (array: (string | number)[], delimeter: string) => string;

// const makeStringFromArray: MakeStringFromArray = function(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
//  string = array.join(delimeter);
//   // Пиши код выше этой строки
//   return string;
// }

// console.log(makeStringFromArray([1,2,3], '-'));

// 13/2
// Задание
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.
// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/массивы-для-новичков.
// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.

// type Slugify = (title: string) => string;

// const slugify: Slugify = function (title) {
//   // Пиши код ниже этой строки
//   let totalTitle:any = '';
//   totalTitle = title.toLowerCase();
//   totalTitle = totalTitle.split(' ');
//   return totalTitle = totalTitle.join('-');
//   // Пиши код выше этой строки
// }

// console.log("🚀 ~ slugify ~ slugify:", slugify('Это заголовок статьи'))

// 14/2
// Задание
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// const fruits:string[] = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log("🚀 ~ firstTwoEls:", firstTwoEls)
// console.log("🚀 ~ nonExtremeEls:", nonExtremeEls)
// console.log("🚀 ~ lastThreeEls:", lastThreeEls)


// 15/2
// Задание
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
// type arrType = string[];

// const oldClients: arrType = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients: arrType = ['Персик', 'Хьюстон'];
// const allClients = oldClients.concat(newClients); // Дополни эту строку
// console.log("🚀 ~ allClients:", allClients)


// 16/2
// Задание
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.
// type MakeArray = (firstArray: (string | number)[], secondArray: (string | number)[], maxLength: number) => (string | number)[];

// const makeArray: MakeArray = function(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//   // новый массив
//   let newArray = firstArray.concat(secondArray);
//   // длина нового массива
//   let newArrayLength = newArray.length;
//     if (newArrayLength > maxLength) {
//   return newArray = newArray.slice(0, maxLength);
//     }
//     else {
//    return newArray;
//   }
//     // Пиши код выше этой строки
// }
// console.log(makeArray([1,2,3], ['f', 'd', 'g'], 10));
// console.log(makeArray([1,2,3], ['f', 'd', 'g'], 5));


// 17/2
// Задание
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
// const start:number = 3;
// const end: number = 7;

// for (let i = start; i <= end; i += 1) {
//   //   Дополни эту строку
//   console.log(i);
// }

// 18/2
// Задание
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
// type CalculateTotal = (number: number) => number;

// const calculateTotal: CalculateTotal = function(number) {
// //   писать код ниже
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//    total += i;
//   }
// return total;
//   // console.log(total);
// //   писать код выше
// }
// console.log(calculateTotal(3));

// 19/2
// Задание
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
// const fruits: string[] = ["яблоко", "слива", "груша", "апельсин"];

// for (let i = 0; i < fruits.length; i += 1) {  //   писать код
//   const fruit = fruits[i]; //   писать код
//   console.log(fruit);
// }

// 20/2
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// type CalculateTotalPrice = (order: number[]) => number;

// const calculateTotalPrice: CalculateTotalPrice = function(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([2,2,1]));

// 21/2
// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
// type FindLongestWord = (string: string) => string;

// const findLongestWord: FindLongestWord = function(string) {
//   let array:string[] = string.split(" ");
//   let longest = '';

//   for (let i = 0; i < array.length; i += 1) {
//     if (longest.length < array[i].length) {
//       longest = array[i];
//     }
//   }
//   return longest;
// }

// 22/2
// Задание
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
// type Fn = (min: number, max: number) => number[];

// const createArrayOfNumbers: Fn = function(min, max) {
//   const numbers: number[] = [];
//   // Пиши код ниже этой строки
//     for (let i = min; i <= max; i += 1) {
//       numbers.push(i);
//     }
//     // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(3, 7));

// 23/2
// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
// type FilterArray = (numbers: number[], value: number) => number[];

// const filterArray: FilterArray = function(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArray: number[] = [];

//   for (let i = 0; i <= numbers.length; i += 1) {
//       if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//       }
//   }
//   return newArray;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([12,24,8,41,76], 20));

// 24/2
// Задание
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// type CheckFruit = (fruit: string) => (true | false);

// const checkFruit: CheckFruit = function (fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
//   return fruits.includes(fruit);
// }

// 25/2
// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
// type GetCommonElements = (array1: number[], array2: number[]) => number[];

// const getCommonElements: GetCommonElements = function(array1, array2) {
//   // Пиши код ниже этой строки
//   const newArray: number[] = [];

//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
//   //  console.log(newArray);
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));  //возвращает [1, 2]

// 26 / 2
// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
// type Fn = (order: number[]) => number;

// const calculateTotalPrice: Fn = function (order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (const ord of order) {
//     //   console.log(ord);
//     total += ord;
//   }
//   // Пиши код выше этой строки
//   return total;
// }
// calculateTotalPrice([164, 48, 291]) // возвращает 503.

// 27 / 2
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// type Fn = (numbers: number[], value: number) => number[];

// const filterArray: Fn = function (numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers: number[] = [];

//   for (const number of numbers) {
//       if (number > value) {
//       filteredNumbers.push(number);
//       }
//   }
//   return filteredNumbers;
//   // Пиши код выше этой строки
// }
//  filterArray([12, 24, 8, 41, 76], 38) // возвращает [41, 76].

// 28 / 2
// Задание
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// const a: number = 3 % 3;
// const b: number = 4 % 3;
// const c: number = 11 % 8;
// const d: number = 12 % 7;
// const e: number = 8 % 6;

// 29 / 2
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.
// type GetEvenNumbers = (start: number, end: number) => number[];

// const getEvenNumbers: GetEvenNumbers = function (start, end) {
//   // Пиши код ниже этой строки
//   const array: number[] = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
//   // Пиши код выше этой строки
// }
// getEvenNumbers(3, 11) // возвращает [4, 6, 8, 10].
// getEvenNumbers(6, 12) // возвращает [6, 8, 10, 12]

// 30 / 2
// Задание
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start: number = 6;
// const end: number = 27;

// let number: number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 31 / 2
// Задание
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.

// type Fn = (start: number, end: number, divisor: number) => number | undefined;

// const findNumber: Fn = function (start, end, divisor) {
//   // Пиши код ниже этой строки
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i
//     }
//   }
//   // Пиши код выше этой строки
// }

// console.log(findNumber(1, 100, 4))
// 32 / 2
// Задание
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
// type Fn = (array: (number | string)[], value: string | number) => boolean;

// const includes: Fn = function(array, value) {
//   // Пиши код ниже этой строки
//     for (const number of array) {
//         if (number === value) {
//             // console.log(true);
//            return true;
//             // break;
//         }
//     }
//     // console.log(false);
//     return false;
//   // Пиши код выше этой строки
// }
// includes([1, 2, 3, 4, 5], 3) //возвращает true.
// includes([1, 2, 3, 4, 5], 17) //возвращает false.
// includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер') //возвращает true.
// includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран') //возвращает false.
// includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива')// возвращает true.
// includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви') //возвращает false.
