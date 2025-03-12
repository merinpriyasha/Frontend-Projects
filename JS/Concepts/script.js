alert('Hello Good morning');
document.write('Hi, How are you');

/**
 * -----------------------------------------
 * OBJECT
 */






//Constructor function
//name must be start from capital letter and used new keyword
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.getFullName = function() {
    return this.firstName +" " + this.lastName;
  }
}

const person1 = new Person("Elon", "Musk");
const person2 = new Person("Bill", "Gates");

person1.age = 45; //add new propertey

person2.greet = function() { //function decalaration inside the object property
  console.log("Hello...");
}
console.log(person1);
console.log(person1.age);
person2.greet();

//in js every function and object has its own property called prototype.
//prototype itself is also a another object. so , the prototype has it own prototype. this creates a protype chain

//we can use the prototype to add properties and methods to a constructor function
//and object inherit the properties and methods from a prototype

//add new property to the constructor
Person.prototype.gender = "Male";
Person.prototype.getGender = function() {
  return this.gender;
}
const person3 = new Person("John", "Perera");
console.log(person3.gender);
console.log(person3.getGender());

//change value in prototype

Person.prototype.city = 'chilaw';
const person4 = new Person();

Person.prototype = {city: 'CHILAW'};
const person5 = new Person();
console.log(person4.city)
console.log(person5.city)

/*
Object Destructin
*/
const student = {
  stuFirstName: "Kasun",
  stuLastName: "kalhara"
}
const {stuFirstName: fName, stuLastName: lName} = student;
console.log(fName + " " + lName);

//add default value to age
const {stuFirstName, stuLastName, age = 18} = student;

/*
Object literal
 */

let number = 20;
let city = 'chilaw';
let country = 'srilanka';

const address = {
  number,
  city,
  country
}

console.log(address);

/**
 * ----------------------------------------------
 * CLASS
 */
//classes are one of the features introduced in the ES6 version of js

class Book{
  constructor(name, author){
    this.name = name;
    this.author = author
  }
  blog(){
    return this.name + "is written by "+ this.author;
  }
  changeName(newname) {
    this.name = newname;
  }

  /**
   * Getter and Setters
   */

  get getAuthor() {
    return this.author;
  }

  set setAuthor(authorName) {
    this.author = authorName;
  }
}

const book1 = new Book("oliver", "author1");
console.log(book1);
book1.changeName('Olvier twist');
console.log(book1);
//we can add any noumber of methods in js class

//Call getter and setters
book1.setAuthor = "Tome";
console.log(book1.getAuthor);

/**
 * Class expressions
 */
//class expression provide a alternative way to define a new class
//it is similar to the function expression but it uses the class keyword instead of the function keyword
//class expression can be named ot unnamed. if it is named, the name can be used to refer class later
//if it is unnanmed they can only be refered by the varaiable they are assigned to

let Dog = class {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
  }
  getBreed() {
    return this.breed;
  }
}

const dog1 = new Dog('blacky', 'germonshepered');
console.log(dog1);

//js class inheritance allow you to create new class on the basic of already existing class.
//using class inheritance, a class can inherit all the methods and properties of another class
//inheritance is a useful featured that allows the code reusability. to create a class inheritance, we use the extend keyword.

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    return 'animal make ' + this.sound;
  }
}

class Cat extends Animal{
  constructor(name, sound, action){
    super(name, sound);  //super() method used inside a child class denote its parent class
    this.action = action;
  }
  makeSound() { //overiding
    return 'cat make '+ this.sound;
  }
  static action() { //static method
    return 'cat is ' + this.action;
  }
  static description(obj){
    console.log(obj.name + ' make the sound : '+ obj.sound );
  }
}

const cat1 = new Cat('kitty', 'chaw', 'cleaning body' );
console.log(cat1.makeSound());

/**
 * method overiding - 
 * if the parentclass and child class has the same method or property name. in this case, when we will call the 
 * method or property of an object of the child class, it will overide the method or property of the parent class.
 * this is known as method overriding or shadowng method
 */


/**
 * static method - 
 * static method are bound to a class, not the instances of that class. you can not call a static method on an objecr,
 * it can be called only on the class
 */

console.log(Cat.action());

/**
 * if we want to use the object's properties inside the static method, then we can pass the 
 * object as a parameter
 */
Cat.description(cat1);

/**
 * Private method - 
 * private methods are accessible only within the class.it means we cannot
 * call the private methods outside of the class
 * 
 * by default method of the class are public. to make the method private we need to start the
 * method name with hash(#)
 */

class Fish {
  constructor(breed, action) {
    this.breed = breed;
    this.action = action;
  }

  #action() {
    return this.breed + "is doing "+ this.action;
  }
  display() {
    console.log(this.#action());
  }

  //private static method
  static #getColor(obj) {
    return 'this fish is' + obj.breed + "and has red color";
  }
  getColorFish(){
    console.log(Fish.#getColor(this));
  }

}

const fish1 = new Fish('goldfish', 'swimming');

fish1.display();

/**
 * static private method
 */
fish1.getColorFish();