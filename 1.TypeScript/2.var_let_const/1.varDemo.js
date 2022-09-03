/*
 1) var : keyword have issue that , var variables's value will get modified out of the loop also if any function will not be there,
        it will modify the value of same named var which is outside the scope. (refer case 2)
    -> to overcome this issue of var keyword , let is introduced.
    -> var consider only function scope , didn't consider block scope.
*/
//---------------------------------------
// Case 1
var petName = "dog";
function setPetName() {
    var petName = "cat";
    console.log("inside fun : " + petName); //-> cat
}
setPetName();
console.log("outside fun : " + petName); //-> dog
// Case 2
var index = 0;
for (var index = 0; index <= 4; index++) {
    console.log("index inside for loop :" + index); //-> 0,1,2,3,4
}
// ISSUE : Using var , index value is getting modified outside the loop also 
console.log("index value outside for loop :" + index); //-> 5  , expected was 0 but actual is 5 
