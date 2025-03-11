// program showing the concept of run time polymorphism
// static method cannot be overriden
class Parent{
    static void display(){
        System.out.println("display method called of parent");
    }
}
class Child extends Parent{    
    @Override // annotation
    void display(){
        System.out.println("display method called of child");
    }
}
class Demo15{
    public static void main(String args[]){
        Parent cobj = new Child();  // upcasting
        cobj.display();
    }
}
