class Parent {   
    show() {   
       console.log("It is the show() method from the parent class");  
    }  
 }  
 class Child extends Parent {   
    show() {   
       console.log("It is the show() method from the child class");  
    }   
 }   
 var obj = new Child();   
 obj.show();  