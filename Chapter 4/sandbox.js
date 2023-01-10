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


const calcArea = radius => {
    return 3.14 * radius ** 2;
    
}

let area = calcArea(5);