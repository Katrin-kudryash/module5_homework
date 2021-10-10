// Задание 2.
// Дана переменная Х, которая может принимать любое значение. 
// Написать программу, которая в зависимости от типа данных Х выводит 
// в консоль сообщение вида: «X — число».
// Опишите три случая: когда х = числу, строке или логическому типу. 
// В других случаях выводите сообщение: «Тип x не определён».

// Вариант 1
let x = prompt('Введите значение X');
if (x === 'true' || x === 'false') {
	alert(x + ' = логическому типу');
} else if (typeof +x === "number" && !isNaN(x)) {
	alert(x + ' = числу');
} else if (typeof x === 'string') {
	alert(x + ' = строке');
} else {
	alert('Тип ' + x + ' не определён')
}


// Вариант2
let x = prompt('Введите значение X');
let y = typeof x;

switch (y) {
	case 'boolean':
		console.log(x + ' = логическому типу');
		break;
	case 'number':
		console.log(x + ' = числу');
		break;
	case 'string':
		console.log(x + ' = строке');
		break;
	default:
		console.log('Тип ' + x + ' не определён');
		break;
}