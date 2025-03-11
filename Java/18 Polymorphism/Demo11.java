// program showing the concept of run time polymorphism

class Parent{
    void display(){
        System.out.println("display method called of parent");
    }
    void show(){
        System.out.println("show method of parent called");
    }
}
class Child extends Parent{    
    @Override // annotation
    void display(){
        System.out.println("display method called of child");
    }
}
class Demo11{
    public static void main(String args[]){
        Parent cobj = new Child();  // upcasting
        cobj.display();
        cobj.show();
    }
}