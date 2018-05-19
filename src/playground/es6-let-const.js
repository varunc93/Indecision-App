var name = "Name";
var name = "Name1"; //allows to redifne the same variable twice

console.log("Name:", name);

let name1 = "Name1";
name1 = "Name2"; //cannot declare name1 twice

console.log("Name:", name1);

const name2 = "Name2";

console.log("Name:", name2); //cannot reassign the variable value once set


// let and const are block based whereas var is function based scoping

var fullname ="FN LN";

if(fullname){
    var firstname = fullname.split(" ")[0];
    console.log(firstname);
}

console.log(firstname); //with var it works since firstname has same scope as fullname
//but will not work with let and const