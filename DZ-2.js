// // 11/2
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
// const array = message.split(' ');
// const arrayLength = array.length;
// return arrayLength * pricePerWord;
//   // Пиши код выше этой строки
// }
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));


// 12/2
// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
//  string = array.join(delimeter);
//   // Пиши код выше этой строки
//   return string;
// }


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

//  function slugify(title) {
//   // Пиши код ниже этой строки
//    title = title.toLowerCase();
//    title = title.split(' ');
//     return title = title.join('-');
//   // Пиши код выше этой строки
// }


// 14/2
// Задание
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);


// 15/2
// Задание
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];
// const allClients = oldClients.concat(newClients); // Дополни эту строку


// 16/2
// Задание
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
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


// 17/2
// Задание
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   //   Дополни эту строку
//   console.log(i);
// }

// 18/2
// Задание
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
// function calculateTotal(number) {
// //   писать код ниже
//   let total = 0; 
//   for (let i = 1; i <= number; i += 1) {
//    total += i;
//   }
// return total;
//   // console.log(total);
// //   писать код выше
// }
//   console.log(calculateTotal(3));

// 19/2
// Задание
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
// const fruits = ["яблоко", "слива", "груша", "апельсин"];
// for (let i = 0; i < fruits.length; i += 1) {  //   писать код 
//   const fruit = fruits[i]; //   писать код
//   console.log(fruit);
// }

// 20/2
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// for (let i = 0; i < order.length; i += 1) {
//    total += order[i];
//   }
//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([2,2,1]));

// 21/2
// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
// function findLongestWord(string) {
// let array = string.split(" ");
// let longest = '';
//   for (let i = 0; i < array.length; i += 1) {
//     if (longest.length < array[i].length) {
//     longest = array[i]; 
//     }
//   }
//   return longest;
// }

// 22/2
// Задание
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//     for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     }
//     // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(3, 7));

// 23/2 
// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
// function filterArray(numbers, value) {
// //   // Пиши код ниже этой строки
// const newArray = [];
  
//     for (let i = 0; i <= numbers.length; i += 1) {
//         if (numbers[i] > value) {
//         newArray.push(numbers[i]);
//         }
//     }
  
// return newArray;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([12,24,8,41,76], 20));

// 24/2
// Задание
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
//   return fruits.includes(fruit); 
// }

// 25/2
// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const newArray = [];
//     for (let i = 0; i <= array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//         newArray.push(array1[i]);
//         }  
//     }
//     return newArray;
//     //  console.log(newArray);
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));  //возвращает [1, 2]

// 26 / 2
// Задание
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//     for (const ord of order) {
//     //   console.log(ord);
//     total += ord;
//     }
//   // Пиши код выше этой строки
//     return total;
// }
// calculateTotalPrice([164, 48, 291]) // возвращает 503.

// 27 / 2
// Задание
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];
//     for (const number of numbers) {
//         if (number > value) {
//         filteredNumbers.push(number);
//         }
//     }
//   return filteredNumbers;
//   // Пиши код выше этой строки
// }
//  filterArray([12, 24, 8, 41, 76], 38) // возвращает [41, 76].

// 28 / 2
// Задание
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// 29 / 2
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.
// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//     const array = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             array.push(i);
//         }
//     }
//     return array;
//     // Пиши код выше этой строки
// }
// getEvenNumbers(3, 11) // возвращает [4, 6, 8, 10].
// getEvenNumbers(6, 12) // возвращает [6, 8, 10, 12]

// 30 / 2
// Задание
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
// const start = 6;
// const end = 27;
// let number;
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
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Пиши код выше этой строки
// }

// 32 / 2
// Задание
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
// function includes(array, value) {
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
