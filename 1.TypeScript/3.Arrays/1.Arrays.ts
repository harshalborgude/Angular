
/*
1) Arrays are used to store group of values.
2) In typescript arrays size is not fixed , we can store as many values as we want.
3) Arrays can store hetrogenious values also in typescript.
    let fruits:string[];   -> array of string. 
                    OR
    let fruits:Array<string>;
4) In type script , arrays dont have limitation on number of elements or data type of elements.
5) we can iterate typescript arrays same as java.

*/


//------------------------------------------

// way 1
let fruits:string[];
fruits = ["mango","apple","banana"];
console.log(fruits);

// way 2
let animals : Array<string>;
animals = ['Tiger','Lion','Rabbit'];
console.log(animals);

// way 3  - string and number ( int + float )
let persons : Array<string | number>;
persons = ['Ram',20,'Anil',30,20.23];
console.log(persons);

// way 4 - array of any
// let anyArray:any[];
let anyArray:Array<any>;
anyArray = ['Ram',20,'Anil',20.24,true,false,34.23];
console.log(anyArray);

// accessing arrays using indexes.
console.log("index 0 :"+anyArray[0]);

//iterating array using forEach and lambda
console.log("---------------------");
anyArray.forEach(item =>{
    console.log(item);
})
