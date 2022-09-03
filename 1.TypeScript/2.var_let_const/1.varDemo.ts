
/*
 1) var : keyword have issue that , var variables's value will get modified out of the loop also if any function will not be there, 
        it will modify the value of same named var which is outside the scope. (refer case 2)
    -> to overcome this issue of var keyword , let is introduced.
    -> var consider only function scope , didn't consider block scope.
*/

// 'var' is a functional scope , it don't consider block scope which can create a problem.
// 'let' is a block scope , it consider each block's and functions scope , introduced to solve issue of var keyword.
// 'const' is used to declare constant variable , can't be modified after initialization.

// data types in Type Script : number , string , boolean , any.


//---------------------------------------

// Case 1
var petName:string = "dog";
function setPetName() {
    var petName:string = "cat";
    console.log("inside fun : "+petName);   //-> cat
}
setPetName();
console.log("outside fun : "+petName);  //-> dog

// Case 2
var index = 0;
for(var index=0;index<=4;index++){
    console.log("index inside for loop :"+index);  //-> 0,1,2,3,4
}
// ISSUE : Using var , index value is getting modified outside the loop also 
console.log("index value outside for loop :"+index);   //-> 5  , expected was 0 but actual is 5 


 




