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
}
class Demo10{
    public static void main(String args[]){
        Parent cobj = new Child();  // upcasting
        cobj.display();
    }
}