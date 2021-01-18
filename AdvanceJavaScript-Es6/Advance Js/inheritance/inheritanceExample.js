/*Inheritance:Before the ES6, the implementation of inheritance required several steps. 
But ES6 simplified the implementation of inheritance by using the extends and super keyword.
Inheritance is the ability to create new entities from an existing one. 
The class that is extended for creating newer classes is referred to as superclass/parent class, 
while the newly created classes are called subclass/child class.
A class can be inherited from another class by using the 'extends' keyword.*/
class Student {   
    constructor(name,universityName) {   
     this.name = name  ;
     this.universityName=universityName;
    }   
 }   
 class User extends Student {   
    show() {   
      console.log("The Name of The student is:  "+this.name)   
       console.log("The Name of The university is:  "+this.universityName)   
    }   
 }   
 var obj = new User('Amitha','visvesvaraya Technological University');   
 obj.show()  