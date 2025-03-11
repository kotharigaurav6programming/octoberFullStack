// program showing the concept of run time polymorphism

class Parent{
    void display(){
        System.out.println("display method called of parent");
    }
}
class Child extends Parent{    
    @Override // annotation
    void display(){
        System.out.println("display method called of child");
    }
    void show(){
        System.out.println("show method of parent called");
    }
}
class Demo12{
    public static void main(String args[]){
        Parent cobj = new Child();  // upcasting
        cobj.display();
        Child obj = (Child)cobj; // downcasting
        obj.show();
    }
}




// class Parent extends Object{

// }
// class Child extends Parent{

// }

// Parent cobj = new Child();

// Object obj =  myMethod();

// class MyClass{}---------------------> myobj
// MyClass ob = (MyClass)myMethod();