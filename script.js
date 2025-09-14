console.log('Hello world');
console.log('this is first line\nthis is second line');
console.log(`half of 100 is ${100/2} `);
console.log( typeof 4.5 );
console.log(typeof "10");
console.log(-(10-2));
console.log(3>2);
console.log(3<2);
console.log("Aardvark"<"Zorostar");
console.log("Garnet"!="Parl");
console.log("Pearl"=="Amethyst");
console.log(NaN == NaN);
console.log(true && false);
console.log(true && true);
console.log(false || true);
console.log(false || false);
console.log(((1+1)==2) && ((10*10)>50));
console.log(true ? 1:2);
console.log(false ? 1:2);
console.log(8*null);
console.log("5"-1);
console.log("5"+1);
console.log("five"*2);
console.log(false == 0);

console.log(null == undefined);
console.log(null == 0);

console.log(null || "user");
console.log("Agnes" || "user");
console.log(100||0);
console.log(0??100);
console.log(null ?? 100 );

let cought = 5*5;
console.log(cought);

let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood =  "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = 140 - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

var name = "Ayda";
const greetings = "Hello ";
console.log(greetings+name);

console.log(Math.max(2,4));
console.log(Math.min(2,4)+100);

// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is square root of : "+ theNumber * theNumber);

// let theNumber = Number(prompt("pick a number"));
// if(!Number.isNaN(theNumber)){
//     console.log("Your number is square root of : "+ theNumber * theNumber);
// }
//The Number.isNaN function is a standard JavaScript function that returns true only 
// if the argument it is given is NaN

if(1+1 == 2) console.log("it's true");

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
// console.log("Your number is the square root of " +
// theNumber * theNumber);
// } else {
//     console.log("Hey! Why didn't You give me a number");
// }



// let num = Number(prompt("pick a number"));
// if(num < 10){
//     console.log("small");
// }else if (num < 100) {
//     console.log("medium");
// }else{
//     console.log("large");
// }


// let result = 1;
// let counter = 0;
// while(counter < 10){
//    result = result * 2;
//    counter = counter + 1; 
// }
// console.log(result);


// let yourName;
// do{
//     yourName = prompt("your name");
// }while(!yourName)
// console.log("Hello "+yourName);

if(false!=true){
    console.log("that make sense");
if(1<2){
    console.log("no surprise there");
}}

for(let number=0; number<=12; number = number+2){
    console.log(number);
}

let result = 1;
for(let counter =0; counter < 10; counter=counter+1){
    result = result *2;
}console.log(result);


for(let current =20; ; current=current+1){
    if(current%7==0){
        console.log(current);
        break;
    }

}

switch(prompt("What your your weather look like?")){
    case "rainy":
        console.log("Remember to bring an umbrella");
        break;
    case "sunny":
        console.log("Dress lightly")
        break;
    case "cloudy":
        console.log("Go out side");
        break
    default:
        console.log("Unknown weather type!");
        break;
}