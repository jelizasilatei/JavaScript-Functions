
/*function sayHello(){
    console.log("Hello!");
}
sayHello();

function sayHelloToIssabel(){
    console.log("Hello, Issabel!");
}

function sayHelloToSofia(){
    console.log("Hello, Sofia!");
}

function sayHelloToBrendan(){
    console.log("Hello, Brendan!");
}

sayHelloToIssabel();
sayHelloToSofia();
sayHelloToBrendan();

function doSomething(thing){
    console.log(thing);
}
doSomething("anything");// passing the argument 'anything' into our function

function sayHello(firstName){
    console.log(`Hello, ${firstName}`);
}
sayHello("Jeliza");
sayHello("Zalley");
sayHello("Ziza");
sayHello("Jetza");

function say(greeting, firstName){
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio"); */

function add(x, y){
    return x + y;
}
console.log(add(1,2));

/*const sum = add(num1, num2);
const message = `The sum of your numbers is: ${sum}.`;
message();*/

function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}

console.log(say("Howdy", "partner"));


