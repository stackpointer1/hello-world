console.log("Damn! hello world from the script tag")
var a=42;
var b="I am a stacktop";
var c=true;
//print are default
console.log(a+b);// 42 I am a stacktop
console.log(a+c); //42 true
console.log(b+c);
//Math operator
var a=2;
var b=3;
var c=4;
var s=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/2);
console.log(a%b);
console.log(a++);
console.log(a--);

a+=4;
console.log(a);
var anotherA ="42";
var jusTrue="true";
var deepTrue=true;
//equality opearator
//shallow equality
console.log(a==anotherA);
//deep equality
console.log(a== anotherA);
console.log(jusTrue== deepTrue);
console.log("here we go");
//maths equality
a=3;
b=2;
c=5;
d=7;
console.log(a<b);
console.log(c<=d);
//logical operations
console.log(a<b && c<d);
//values which are permisiiable in js for now we will talk about only numbers,string and booleans
//coercion
var e=true;
var f=false;
console.log(a+e); //implicit coercion
//i.e a=3 and e=true e-> true=1 by js internally and thus ans will be 4
console.log(a+"some string");
//i.e here a=number and some string is some string amd thus we will see that the number is converted into the string
//and=3some sring
//explicit coercion
console.log(a+Number(e));
console.lof(string(a)+"some string");
//here we have made changes accordingly and thus we know what to so ! alwaya prefer explicit coercion over implicit
//cause implicit jd coercion gives weird anser sometimes
//static and dynamic typing
var someVariable=2;

console.log(someVariable);
someVaribale="some variable";
console.log(someVariable);
someVariable=true;
console.log(someVariable);
//lets talk about some constant in native js
var PERCENTAGE_OF_COOL_KIDS_I_HAVE=100;
//blocks
if(PERCENTAGE_OF_COOL_KIDS_I_HAVE=100)
    {
        console.log("damn ready quite a batch u have");

    }
    else{
        console.log("how heartless you are");
    }
