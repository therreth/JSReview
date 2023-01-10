const para = document.querySelector('div.error');
//Gets first class nested in a div
//const para = document.querySelector('body > h1');

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

paras.forEach( para => {

});
// get element by id

//const title = document.getElementById("page-title");

//get elements by class name
const errorss = document.getElementsByClassName("error");

//get elements by their tag name
const tags = document.getElementsByTagName("p");


//Getting inner text
const firstPara = document.querySelector("p");
firstPara.innerText = "hereerereer";

const allPTags = document.querySelectorAll('p');
allPTags.forEach(para => {
    para.innerText += " WOah";
});

const content = document.querySelector(".content");
content.innerHTML += `<h2>Here is a new title</h2>`;

const people = ['mario', 'luigi' ,'yoshi'];

people.forEach(peep => {
    content.innerHTML += `<p>${peep}</p>`;
});

const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href','www.discord.com');
link.innerText = "Discord link";

const mssg = document.querySelector('p.error');

mssg.setAttribute('class','success');
mssg.setAttribute('style', 'color: green;');

const title = document.querySelector('h1');
title.style.color = 'pink';
title.style.margin = '50px';