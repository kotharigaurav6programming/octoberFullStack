// program showing the concept of method overriding

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
class Demo8{
    public static void main(String args[]){
        Child cobj = new Child();
        cobj.display();
    }
}