//The prototype design pattern lets us create clones of the existing objects. 
//This is similar to the prototypal inheritance in JavaScript. All of the properties and methods of an object
// can be made available on any other object by leveraging the power of the __proto__ property.
//A fully initialized instance to be copied or cloned

function CustomerPrototype(proto) {
    this.proto = proto;
 
    this.clone = function () {
        var customer = new Customer();
 
        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;
 
        return customer;
    };
}
 
function Customer(first, last, status) {
 
    this.first = first;
    this.last = last;
    this.status = status;
 
    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
              ", status: " + this.status);
    };
}
 
function run() {
 
    var proto = new Customer("n/a", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);
 
    var customer = prototype.clone();
    customer.say();
}
run();
/*we have a CustomerPrototype object that clones objects given a prototype object. Its constructor function accepts a prototype of type Customer. 
/Calling the clone method will generate a new Customer object with its property values initialized with the prototype values.*/