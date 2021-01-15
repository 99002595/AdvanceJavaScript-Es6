/*

Classes are an essential part of object-oriented programming .
JavaScript Classes are templates for JavaScript Objects.
Classes are used to define the blueprint for real-world object modeling and organize the code into reusable and logical parts.
A class definition can only include constructors and functions. These components are together called as the data members of a class. The classes contain constructors that allocates the memory to the objects of a class. 
Classes contain functions that are responsible for performing the actions to the objects.
The object can access the attributes and functions of a class. We use the '.' dot notation  for accessing the data members of the class.*/
class Person
{
    constructor(name,city,age)
    {
        this.name=name;
        this.city=city;
        this.age=age;

    }
}
    var Person1=new Person("Aruna","Ballari",21);
    console.log(Person1.name);
    console.log(Person1.city);
    console.log(Person1.age);


