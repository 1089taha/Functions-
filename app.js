// Simple Function
/*function greet(): void {
    console.log("Hello World!");
}
greet();

// Functions with Parameters
function user_name(name:string):void{
    console.log(`Hi My Name is ${name}`);
}
user_name("Taha");

// Functions with Return Values
function add(a:number,b:number): number {
      return a+b;
}
let result= add(7,3);
console.log(result);

//Example
function conversionMinTOSec(num:number):number{
    return num * 60
}
console.log(conversionMinTOSec(2));

// Arrow Functions
const myName=(name:string):void=>{
    console.log(`Hello ${name}!`);
}
myName("Taha");

// Example 1 (EXPLICIT RETURN)
const welcomeMessage=(userName:string):string =>{
    return `${userName}, Welcome To My Website`
}
console.log(welcomeMessage("Taha"));

// Example 2 (IMPLICIT RETURN)
const total_score=(num1,num2)=>(num1+num2)
console.log(total_score(435,333) +"Is The Target");






// FUNCTION WITH IF-ELSE STATEMENT
function Greet(name:string):void{
    if(name === 'Taha'){
        console.log("Hi Taha");
    }else if(name === "Areeb"){
        console.log("Hi Areeb");
    }else{
        console.log("Hi Guest");
    }
}
Greet("Ali");


// Example 1
function num_check(a:number):string {
    if(a % 2 ===0){
        return 'EVEN';
    }else{
        return "ODD"
    }
}
console.log(num_check(23));

// Example 2
function homePage(message:string){
    if(message === "login"){
        return (`How Can I Help You Today`)
    }else{
        return (`Please Login First`)
    }
}
//const home_page_result = homePage(`login`)
console.log(homePage(`login`));

// Rest Operator Funtion
function calculateBootStock(val1,val2, ...num1){
        return num1
}
console.log(calculateBootStock("first_month is 50 pices","second_month is 75 pices","third_month is pices"));

// Imediately Invoked Funtion Expression (IIFE)
//Named (IIFE)
(function myName(){
    console.log("taha");
})();
// Simple (IIFE)
(()=>{
    console.log("Hello My Name Is Taha");
})()

// Anonymous Function
const Length: number = 20;
const Width: number = 5;
const calaulateArea = function (Length: number, Width: number): number {
  return Length * Width;
};
const area = calaulateArea(Length, Width);
console.log(area);

// Anonymous Function With Explicit Type
let minutes: number = 3;
let seconds: number = 60;
const conversion: (minutes: number, seconds: number) => number = function (
  minutes: number,
  seconds: number
): number {
  return minutes * seconds;
};
const conversion_result = conversion(minutes, seconds);
console.log(conversion_result);

// Nested Function
function rectangle_result(Length:number,Width:number):void{
    function calculate_area():number{
        return Length * Width;
    }
    function calculate_parameter():number{
        return 2 * (Length + Width);
    }
    function calculate_diagonal():number{
        return Math.sqrt ((Length*Length) + (Width*Width));
    }
    console.log("Area" + calculate_area());
    console.log("Parameter" + calculate_parameter());
    console.log("Diagonal" + calculate_diagonal());
}
rectangle_result(25,10)*/
// Callback Function
function parentFunction(func) {
    console.log("I'm the parent function");
    func();
}
function childFunction() {
    console.log("I'm the child function");
}
parentFunction(childFunction);
// SetTimeOut Function
console.log('one');
setTimeout(function () {
    console.log("Hello , Taha!");
}, 2000);
console.log('two');
