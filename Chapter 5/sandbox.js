// object literals



let user = {
    name: 'crystla',
    age: 40,
    email: "po@pocvoma.ru",
    location: 'kyiv',
    blogs: [
        {title: "Yo Yo adventures", text: "Sup my dawd"},
        {title: "Kung Fu Bear", text: "Healthy lessons for the young"},
    ],
    login(){

        console.log("User logged in");
    },
    logout(){
        console.log("user logged out");
    },
    logblogs(){
        console.log(this.blogs);
        this.blogs.forEach(blog=> {
            console.log(blog.title, blog.text);
        });
    }



};

console.log(user);
console.log(user.name);

console.log(user.age);

console.log(user['location']);
user['name'] = "Bob";
console.log(user['name']);
console.log(typeof user);

user.login();
user.logout();
user.logblogs();


//Math Object

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));
