// object literals
const blogs = ;


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