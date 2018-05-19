// //arguments function is no longer bound with arrow functions
// const add = function(a, b){
//     console.log(arguments); //will print all the arguments passed inside
//     return a + b;
// }

// console.log(add(55, 1, 20));


// const addarrow = (a, b) => {
//     //console.log(arguments); //will print an error
//     return a + b;
// }

// console.log(addarrow(55, 1, 20));

// //this keyword is no longer bound with arrow functions

// const user = {
//     name: "Name",
//     cities: ["City1", "City2", "City3"],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);

//         const that = this;

//         this.cities.forEach(function (city) { //anonymous function
//             //console.log(this.name + " has lived in " + city); //will throw an error as this is not accesible by anonymous function    
//             console.log(that.name + " has lived in " + city); //work around
//         });
//     }
// };

// user.printPlacesLived();


// const user2 = {
//     name: "Name",
//     cities: ["City1", "City2", "City3"],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);

//         const that = this;

//         this.cities.forEach((city) => {
//             console.log(this.name + " has lived in " + city); //this keyword works
//         });
//     }
// };

// user2.printPlacesLived();

// //this keyword gets bound to parent function


// // const user2 = {
// //     name: "Name",
// //     cities: ["City1", "City2", "City3"],
// //     printPlacesLived: () => {
// //         console.log(this.name);
// //         console.log(this.cities);

// //         const that = this;

// //         this.cities.forEach((city) => { //will not work as parent function becomes the main function i.e. outside user2 object
// //             console.log(this.name + " has lived in " + city);
// //         });
// //     }
// // };

// // user2.printPlacesLived();



// const user3 = {
//     name: "Name",
//     cities: ["City1", "City2", "City3"],
//     printPlacesLived() {
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach((city) => {
//             console.log(this.name + " has lived in " + city);
//         });
//     }
// };

// user3.printPlacesLived();

// //map is similar to forEach but allows us to transform the variables

// // const user4 = {
// //     name: "Name",
// //     cities: ["City1", "City2", "City3"],
// //     printPlacesLived() { //workaround
// //         console.log(this.name);
// //         console.log(this.cities);

// //         const cityMessages = this.cities.map((city) => { 
// //             return city + '!';
// //         });
// //         return cityMessages;
// //     }
// // };

// // console.log(user4.printPlacesLived());

// //concise version for user4

// const user4 = {
//     name: "Name",
//     cities: ["City1", "City2", "City3"],
//     printPlacesLived() { //workaround
//         console.log(this.name);
//         console.log(this.cities);
        
//         return this.cities.map((city) =>  city + '!');
//     }
// };

// console.log(user4.printPlacesLived());


const multiplier = {
    numbers: [1, 3, 7],
    multiplyBy: 8,
    multiply() { 
        return this.numbers.map((number) => number*this.multiplyBy); }
};

console.log(multiplier.multiply());