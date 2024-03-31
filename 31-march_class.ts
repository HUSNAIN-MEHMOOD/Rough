// Operators
// Arithematic
//~Addition
let x = 5,
  y = 2;
let Add = x + y; //7
let Add1 = "x" + "y"; //xy
let Add2 = "xy" + x + y; //xy25, it is considering the x+y as string due previous hardcode string.
let Add3 = x + y + "xy"; //7xy
let Add4 = "xy" + Add; //xy7
let Add5 = x + y + "xy" + 5; //7xy5
console.log("Add = ", Add);
console.log("Add1 = ", Add1);
console.log("Add2 = ", Add2);
console.log("Add3 = ", Add3);
console.log("Add4 = ", Add4);
console.log("Add5 = ", Add5);

//~Subtraction
let Sub = x - y; //3
//let Sub1 = x - "xy";//error
//let Sub2 = "x" - "xy";//error
console.log("Sub = ", Sub);
//console.log("Sub1 = ",Sub1);
//console.log("Sub2 = ",Sub2);

//~Multiplication
//let multi = "x"*y;//NaN
let multi = x * y; //10
console.log("Multi = ", multi);

//~Division
let div = x / y; //2.5
//let div = x/"y";//error
console.log("Div =", div);

//~Exponent
let exp = x ** y; //25
console.log("Exp = ", exp);

//Modulus
let mod = x % y;
console.log("Mode = ", mod);

//Assignment
let n = 5;
n += 5; //n=n+5//10
console.log("Assign n= ", n);

//~increment (++) & decrement(--)
n++; //11
console.log("Increment n= ", n);
n--; //10
console.log("Decrement n= ", n);

//Comparision
n = 5;

//== (equal to ) , (compare only the values.)
n == 5; //true
let x1 = "5";
let y1 = 5;
//x1 == y1;// true (for javascript not for typescript)

//=== (compare the values as well as thire datatype.)
n === 5; //false
//x1 === y1;// false (because one is string & other is number)

// != (not equal to)
n = 7;
n != 5; //true
console.log("print n = ", n);

//>  (greater than)
n > 8; //false
console.log("print n = ", n);

//< (less than)
n < 8; //true
console.log("print n = ", n);

//>=  (greater than or equal to)
n >= 8; //false
console.log("print n = ", n);

//<= (less than or equal to)
n <= 8; //true
console.log("print n = ", n);

//Logical (AND, OR, NOT)
// OR (||)
// T || T = T
// F || T = T
// T || F = T
// F || F = F
//n=7
console.log(n == 5 || n == 6); //false
console.log(n == 5 || n >= 6); //true (F || T = T)

// AND (&&)
// T && T = T
// F && T = F
// T && F = F
// F && F = F
// n=7
console.log(n >= 5 && n <= 8); //true

// NOT (!)
// T! = F
// F! = T
console.log(!(n >= 5 && n <= 8)); //false

//if , else , if elseif Statemnets
let condition = "Pakistan";
let age = 25;
 if (condition == "Pakistan")//true
 {
  console.log("Pakistani");
 } else 
 {
  console.log("Not Pakistani");
 }

 // age condition
 if(age<=12)
 {
  console.log("Chlid");
 }else if(age>=13 && age<=19)
 {
  console.log("Teenager");
 }else
 {
  console.log("Adult");
 }

 // even & odd
 if (n%2==0)
 {
  console.log(n," is Even.");
 }else
 {
  console.log(n," is ODD.");
 }