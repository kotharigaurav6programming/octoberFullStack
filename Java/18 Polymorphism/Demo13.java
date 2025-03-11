// program showing the concept of run time polymorphism

class Parent{
    String name = "Andrew Anderson";
    void display(){
        System.out.println("display method called of parent");
    }
}
class Child extends Parent{    
    String name = "Mathew Math";
    @Override // annotation
    void display(){
        System.out.println("display method called of child");
    }
    void show(){
        System.out.println("show method of parent called");
    }
}
class Demo13{
    public static void main(String args[]){
        Parent cobj = new Child();  // upcasting
        cobj.display();
        System.out.println("Parent name : "+cobj.name);
        Child obj = (Child)cobj; // downcasting
        obj.show();
        System.out.println("Child name : "+obj.name);
    }
}
