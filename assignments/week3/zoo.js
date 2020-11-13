// 11/11/2020

class Animal {
    constructor(alive) {
        this.living = alive;
    }
    
    died() {
        this.living = false;   // false boolean, just opposite of alive
    }
}


class Mammal extends Animal {  //a Class
    constructor(alive) {  //a method
        super(alive); //boolean true will be storing in alive
        this.tail = 1;  //property
        this.type = "mammal";  // property
        this.eye = 2;  //property
    }

    eat () {  //another method
        if ("name" in this) {    //in this ==> inheritance
        console.log(this.name + " eats some food.");
        } else {
            console.log("Animal eats some food.");
        }
    }

    breed(partner) {
        if (partner.constructor.name == this.constructor.name) {
            console.log("successful breeding")
            let child = new Dog
        }
    }
}



class Dog extends Mammal {  //extends=inherit/bring in another class, taking all the methods and properties into this new Class, you are extending the Class
    constructor(dogName, alive) {   // dogName
        super(alive);    //This function runs the constructor of the Class we are inheritingg, it is important to run it first before any other lines of our Dog constructor Class. super=a method
        this.legs = 4;
        this.name = dogName;
    }

bark() {  //a method
    console.log("woof woof!");
    }
}

class Cat extends Mammal{  //extends Mammal, now Cat has all inheritance
    constructor(catName, alive) {
        super(alive);  //to build a mammal object, and get inheritance
        this.legs = 4;
        this.name = catName;
    }


meow() {
    console.log("meow!");
    }
}


//creating animal objects
let animal1 = new Dog("Fido", true);   // =new Dog ();
let animal2 = new Cat("Garfield", true);


animal1.bark();     //showing woof woof!    in Git Bash
animal1.eat();      //showing Fido eats some food.
console.log(animal1.living); //showing true   a boolean, meaning alive

animal2.eat();      //showing Garfield eats some food.
animal2.meow();     //showing meow!
console.log(animal2.living);  //showing true   a boolean

animal1.died();   //showing false    a boolean
console.log(animal1.living);
