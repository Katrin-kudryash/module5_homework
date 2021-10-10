
// Задание 3.
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
// Например, "Hello" -> "olleH".

let str = "Hello";
function reverseStr(str) {
	return str.split("").reverse().join("");
}
alert(reverseStr("Hello"));

// или 
let str = "Hello";
str = str.split("");
str = str.reverse();
str = str.join("");

console.log(str);