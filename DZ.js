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
