//First example
let name = prompt("What is your name?");
alert(`my name is ${name}`);

//second example
let dateBorn = prompt("In what year were you born?");
const year = 2022;
let age = year - dateBorn;
alert(`you are ${age} years old`);
//Third example
let lengthSquare = +prompt("what is the length of the side of the square?");
let squareArea = lengthSquare * 4;
alert(`Area your square is ${squareArea}`);
//Foure example
let radius = +prompt("what is the radius of the circle?");
let circleArea = Math.PI * radius * radius;
alert(`Area your circle is ${circleArea}`);
//Five example
let distance = +prompt("What is distance from Lviv to Odesa?");
let time = +prompt("How long does it take you to get from Lviv to Odesa?");
let speed = distance / time;
alert(`You need speed  ${speed} km/h`);
//six example
let dollars = +prompt("How much do you want to exchange?");
const coefficient = 1.156;
let euro = dollars / coefficient;
alert(`You will get ${euro} Euro `);
