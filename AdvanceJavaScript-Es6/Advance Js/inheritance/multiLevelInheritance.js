class Animal{    
    eat(){  
       console.log("eating...");  
    }    
    }    
    class Dog extends Animal{    
     bark(){  
        console.log("barking..."); 
        super.eat(); 
    }    
    }    
    class BabyDog extends Dog{    
     weep(){  
        console.log("weeping...");  
        this.bark()
        //this.eat();
       }    
    }    
    var d=new BabyDog();    
    // d.eat();    
    // d.bark();    
    d.weep(); 