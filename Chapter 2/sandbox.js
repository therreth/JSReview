alert("Hello");
console.log("MoreText");

let age = 9;
let year = 1222;

console.log(age,year);

age = 1;
console.log(age);

const points = 100;
//points = 50;
console.log(points);

//Strings
console.log("Hello string");

let email = "mario@poo.com";
console.log(email);
//String Concat
let firstname = "Bon";
let lastname = "bonbon";

let fullname = firstname + " " + lastname;
console.log(fullname);

//getting chars
console.log(fullname[0]);

//string lenght
console.log(fullname.length);

//String methods

console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();
console.log(result, fullname);

let index = email.indexOf("p");
console.log(index);

//Commong string methoids

let emailTwo = "hellothere@gmail.com";

let result2 = emailTwo.lastIndexOf("e");
console.log("Slice");
let result3 = emailTwo.slice(0,4);
console.log(result3);
console.log("Substr");
let result4 = emailTwo.substring(0,4);
console.log(result4);

console.log("Replace");
let strreplace = emailTwo.replace('e','p');
console.log(strreplace);



///Template strings

const title = "The Omnicron";
const author = "John Higgings";
const likes = 30;


///concat
let rrr = "The blog titled " + title + " By " + author + " has " + likes + " likes";

///Template string way
let tempa = `The blog titled ${title} by ${author} has ${likes} likes`;

//Creating html templates

let html = `
    <h2>${title}</h2>
    <p>By: ${author} </p>
    <span>Likes: ${likes}</span>

`;