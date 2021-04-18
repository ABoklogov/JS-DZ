// 2 - 6
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//     numbers.forEach(num => {
//         if (num > value) {
//             filteredNumbers.push(num)
//         } 
//     })

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5].

// 3 - 6
// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(num => {
//         if (secondArray.includes(num)) {
//         commonElements.push(num);
//       }
//     })
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

