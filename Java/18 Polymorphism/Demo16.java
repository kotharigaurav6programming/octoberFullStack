// program showing the concept of run time polymorphism
class Parent{
    static void display(){
        System.out.println("display method called of parent");
    }
}
class Child extends Parent{    
    static void display(){
        System.out.println("display method called of child");
    }
}
class Demo16{
    public static void main(String args[]){
        Parent cobj = new Child();  // upcasting
        cobj.display();
        Child obj = (Child)cobj;  // downcasting
        obj.display();
    }
}
