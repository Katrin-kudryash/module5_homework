// Создайте произвольный массив Map. 
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y»
// Используйте шаблонные строки.


let arrMap = [1, 1, 2, 3, 5, 8, 13, 'Fibonacci'];

for (let index in arrMap) {
	console.log(`«Ключ — ${index}, значение — ${arrMap[index]}»`);
}


// Методы перебора массива
// 2 способ самый простой вывести значения
// let arr = [1, 1, 2, 3, 5, 8, 13, 'Fibonacci'];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(`«Значение — ${arr[i]}»`)
// }

// 3 способ с помощью метода forEach
// let arrMap = [1, 1, 2, 3, 5, 8, 13, 'Fibonacci'];

// arrMap.forEach(function (item, index, array) {
// 	console.log(`«Ключ — ${index}, значение — ${item}  в массиве  ${array}»`);
// });

// 4 способ стрелочная функция
// let arrMap = [1, 1, 2, 3, 5, 8, 13, 'Fibonacci'];

// arrMap.forEach((item, index, array) => {
// 	console.log(`«Ключ — ${index}, значение — ${item}  в массиве  ${array}»`);
// });

// 5 способ с помощью метода forEach и таблицы
// let arrMap = [1, 1, 2, 3, 5, 8, 13, 'Fibonacci'];

// arrMap.forEach(function(item, index, array) {
// 	console.table({item, index, array});
// });
