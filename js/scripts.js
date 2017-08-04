/*
alert('test');
*/

// var variable = 'test';
// console.log(variable);

var name = prompt('Enter your name');
	a = 3;
	b = 5;
	h = 4;
	triangleArea = a*h/2;
	value = (a * a) + (2 * a * b) - (b * b);

alert('Hello, ' + name + '. Trinagle field with base a: ' + a + ' and hight h: ' + h + ' is equal to: ' + triangleArea);

console.log('Trinagle field with base a: ' + a + ' and hight h: ' + h + ' is equal to: ' + triangleArea);

console.log('Wynik równania to: ' + value);

if (value > 0) {
	 console.log('Wynik jest dodatni.');	
} else if (value === 0) {
	console.log('Wynik jest równy zero.');
} else {
	console.log('Wynik jest ujemny.');
}