/*
1) Named function : function with name. - can be called by using name.
2) Anonymous function : function without name. - 
----------------
Optional Parameter : in function paramters , we can make it optional by using question mark in front of argument name.
                    ex : function msg(name:string , msg?:string):string{}   -> ? makes it optional
                    - This whould always be written at last.
Default Parameter : in ts function , we can assign default values.
                    ex : function msg(name:string , msg:string="Hello!" ) : string{}   -> "Hello" is defalt argument
Rest Parameters - Variable Arguments : we can pass multiple n number of aguments , and can recieve them as array.
                     ex : function greet(msg:string , ...name:string[]):string{ return msg+" : "+name.join(","); }
                     - Rest paramters should be the last argument always.
*/

//--------------------------------------------

// named function
function welcome() {
    console.log("Hello harshal!");
}
welcome();

function add(x:number , y:number) : number{
        return x+y;
}
let res = add(3,8);
console.log("addition :"+res);



// Anonymous function -
// this anonymous functions are getting stored into variables , to call this functions , have to call with variable name only

let result = function (x:number , y:number) : number{
    return x+y;
}
let value = result(10,20);
console.log("value :"+value);

// Optional Parameters And Default value:

function greeting(name:string , msg:string = "Hello!" ):string{
    return name +" "+msg;
}

let greetingMsg = greeting("harshal","Good Afternoon!");  // harshal Good Afternoon!
// let greetingMsg = greeting("harshal");  // harshal Hello!
console.log(greetingMsg);


// Rest Parameter , Variable Arguments :

function greet(msg:string , ...name:string[]):string{
    return msg+" : "+name.join(",");
}
let msg = greet ("Good Afternoon","Harshal","Dipa","chanku","manku");
console.log(msg);





