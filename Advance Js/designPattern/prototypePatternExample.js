var peopleProto=function() {
    
};
peopleProto.prototype.age=0;
peopleProto.prototype.name="no name";
peopleProto.prototype.city="no city";
peopleProto.prototype.printPerson=function(){
    console.log(this.name + "," +this.age + "," +this.city)
};
var person1=new peopleProto();
person1.name='Aruna';
person1.age=21;
person1.city='bellary';
person1.printPerson();
console.log('blab' in person1);
console.log(person1.hasOwnProperty('name'));