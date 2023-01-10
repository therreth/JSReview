//Function declaration, is hosted to top no matter what
function Hello() {
    console.log('Hello yo');


}

//function expression, not compiled first or hoisted
const speak = function(){


    console.log("Weeeee");
}

//arguments, default values

const speakName = function(name ='Bob', time ='Burger'){
    console.log(`Hello ${name} its ${time}`);

}
speakName();
speakName('John','Cake');


const calcArea = function(radius) {
    return 3.14 * radius ** 2; 
}

const calcAreaTwo = radius => {
    return 3.14 * radius ** 2;   
}

const calcAreaThree = radius => 3.14 * radius ** 2;

const greetTwo = () =>  'Hello World';

const bill = function(products, tax){
    let total =0;
     products.map(num => num + num* tax).forEach(element => {
        total += element;
    });

    return total;

}