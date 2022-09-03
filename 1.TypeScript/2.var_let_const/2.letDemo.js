// Let keyword
// same var example have used with let keyword.
// so let solves issue happening with var.
// let keyword having block scope and var keyword only having function scope.
// so if we want to use variable within function only then can use var , but if we want to use variable with block scope then schould use let.
// Case 1
var petName1 = "dog";
function setPetName1() {
    var petName1 = "cat";
    console.log("inside fun : " + petName1); //-> cat
}
setPetName1();
console.log("outside fun : " + petName1); //-> dog
// Case 2
var index1 = 0;
for (var index1_1 = 0; index1_1 <= 4; index1_1++) {
    console.log("index inside for loop :" + index1_1); //-> 0,1,2,3,4
}
console.log("index value outside for loop :" + index1); //-> 0 , as expected   
// Case 3 
// printing msges as expected considering block scope.
function display() {
    var msg = "welcome to angular ouside block";
    {
        var msg_1 = "welcome to angular inside block";
        console.log("inside block msg value:" + msg_1);
    }
    console.log("outside block msg value:" + msg);
}
display();
var msg = "welcome to angular outside function";
console.log("outside function msg value:" + msg);
