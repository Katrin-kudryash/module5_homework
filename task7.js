// Задание 7.
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать 
// не только числа, но и, например, знаки, null и так далее.

let sumString = 0;
let sumNull = 0;
let sumOdd = 0;
let sumEven = 0;

let arr = [1, 1, 2, 3, 5, 8, 13, 'Fibonacci', null];

for (i = 0; i < arr.length; i++) {
	if (typeof arr[i] == 'string') {
		sumString++;
	} else if (arr[i] == null) {
		sumNull++;
	} else if (arr[i] % 2 === 0) {
		sumEven++;
	} else {
		sumOdd++;
	}
}
alert(` String: ${sumString} \n Null: ${sumNull} \n Even: ${sumEven} \n Odd: ${sumOdd}`);