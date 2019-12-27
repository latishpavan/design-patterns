/*
    1) Used to decorate an object without affecting other objects of the class.
    2) Achieves the enchancement to an object by composition.
    3) the API of the object remains the same.
*/

function User(name) {
    this.name = name;
}

User.prototype.greet = function() {
    return `Hello ${this.name}`;
}

function DecoratedUser(user) {
    const greet = user.greet();
    user.greet = function() {
        return `${greet} from decorator`;
    }
}

const user = new User('Latish');
DecoratedUser(user);
console.log(user.greet());
