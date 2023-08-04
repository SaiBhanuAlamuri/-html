//Bmi task 1

/*const w1 = 95;
const h1 = 1.88;
const w2 = 98;
const h2 = 2.03;
const b1 = (w1) / (h1 * h1);
const b2 = (w2) / (h2 * h2);
const w1greaterw2 = (b1 > b2)
console.log(b1, b2, w1greaterw2)*/

/*

const first = "bhanu"
const job = "student"
const birthy = 2003
const year = 2023
const bhanu = "I'M" + " " + first + ',a ' + (year - birthy) + " " + "year's old" + " " + job + '!';
console.log(bhanu);

*/
//Template literal

/*const bhanunew = `I'm ${first},a ${year - birthy} year's old ${job}`;
console.log(bhanunew)


console.log(`Just a regular string......`)
console.log('string with \n\
multiple \n\
lines');



console.log(`String
Multiple
lines`);*/

/*Conditional statements in javascript
const year = 2023
const age = 15;
const old = age >= 18;
if (old) {
    console.log("Bhanu can start driving");

}
else {
    console.log(`Wait another ${18 - age} to drive :)`)
}
*/
//Type conversion

/*const input = '1991';
console.log(Number(input), input);
console.log(Number(input) + 10)

//Can't convert string to number
console.log(Number("Jonas")) //Gives a non valid numbet
console.log(typeof NaN);

console.log(String(23));
*/

//Type coersion when ever operations is performed between strings and number ,number is converted into a string


/*
console.log('I am' + " " + 23 + "Year's old")
console.log('I am' + " " + String(23) + "Year's old")

console.log('23' + '10' + '3')//Contcates
console.log('23' - '10' - 3)//Converts string into numbers and perform subtraction
console.log('23' * 3);
console.log('23' * '3');//Converts string into numbers and perform multiplication

console.log('23' / '2');//Converts string into numbers and perform divsion


let n = '1' + 1;
n = n - 1;
console.log(n);
*/

//Truthy and false values
//5 Falsy values 0,'',undefined,null,NaN only these things will give us false when we want to convert into boolean others are true

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''))
console.log(Boolean({}));
*/

//Type coersion in if else

/*
const money = 100
if (money) {
    console.log("Don't spend yet all :)")
}
else {
    console.log("You Should get a job")
}
*/

/*
let height = 0;
if (height || height == 0) {
    console.log('Its defined')
}
else {
    console.log('Its Not defined')
}*/


/*const age = 18
if (age === 18) console.log("You become an adult");*/

// ===(don't perform type coersion)
//==(perform type coersion)


/*const fav = Number(prompt("What's your favorite Number"));//Takes input as a string
if (fav === 23) {
    console.log("Cool 23 is an amazing number")
}
else if (fav === 7) {
    console.log("7 is also cool number");
}
else if (fav === 9) {
    console.log("9 is also cool number");
}
else {
    console.log("Number is not cool Number since it is not 23 or 7 or 9");
}

*/
//Strict version of !==

/*
if (fav !== 23) {
    console.log("Why not 23");
}
*/

// //Boolean Logic: And ,or ,Not Operators

// const drive = true
// const vision = false
// console.log(drive && vision)
// console.log(drive || vision)
// console.log(!drive)
// const tired=true

//Coding challege 3

/*
const a = 97
const b = 112
const c = 80
const a2 = 109
const b2 = 95
const c2 = 50
const avg1 = (a + b + c) / 3
const avg2 = (a2 + b2 + c2) / 3
if (avg1 > avg2 && avg1 >= 100) {
    console.log("Dolphin wins");
}
else if (avg2 > avg1 && avg2 >= 100) {
    console.log("Karnal's wins");
}
else if (avg2 == avg1 && avg1 >= 100 && avg2 >= 100) {
    console.log("Both win trophy")
}
else {
    console.log("No wins trophy");
}
*/
//Switch statements


const day = "sunday"
switch (day) {
    case 'monday':
        console.log("Plan course structure");
        console.log("Go to coding set up");
        break;
    case 'tuesday':
        console.log("theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write coding examples");
        break;
    case 'friday':
    case 'saturday':
        console.log("Endevouring knowledge");
        break;
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day")


}

