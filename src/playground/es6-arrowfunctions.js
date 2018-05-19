const square = function(x){
    return x*x;
};

console.log(square(3));

const squareArrow = (x) => {
    return x*x;
}

console.log(squareArrow(3));

//Arrow functions can be made more concise if they only have a single return statement

const squareArrow2 = (x) => x*x;

console.log(squareArrow2(3));