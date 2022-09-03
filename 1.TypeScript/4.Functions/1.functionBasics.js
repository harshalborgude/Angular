/*
1) Named function : function with name. - can be called by using name.
2) Anonymous function : function without name. -
----------------
Optional Parameter : in function paramters , we can make it optional by using question mark in front of argument name.
                    ex : function msg(name:string , msg?:string):string{}   -> ? makes it optional
Default Parameter : in ts function , we can assign default values.
                    ex : function msg(name:string , msg:string="Hello!" ) : string{}   -> "Hello" is defalt argument
Variable Arguments : we can pass multiple n number of aguments , and can recieve them as array.
                    ex : function greet(msg:string , ...name:string[]):string{ return msg+" : "+name.join(","); }

*/
//--------------------------------------------
// named function
function welcome() {
    console.log("Hello harshal!");
}
welcome();
function add(x, y) {
    return x + y;
}
var res = add(3, 8);
console.log("addition :" + res);
// Anonymous function -
// this anonymous functions are getting stored into variables , to call this functions , have to call with variable name only
var result = function (x, y) {
    return x + y;
};
var value = result(10, 20);
console.log("value :" + value);
// Optional Parameters And Default value:
function greeting(name, msg) {
    if (msg === void 0) { msg = "Hello!"; }
    return name + " " + msg;
}
var greetingMsg = greeting("harshal", "Good Afternoon!"); // harshal Good Afternoon!
// let greetingMsg = greeting("harshal");  // harshal Hello!
console.log(greetingMsg);
// Variable Arguments :
function greet(msg) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return msg + " : " + name.join(",");
}
var msg = greet("Good Afternoon", "Harshal", "Dipa", "chanku", "manku");
console.log(msg);
