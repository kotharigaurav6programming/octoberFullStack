// program showing the concept of inheritance (Single Inheritance)
// parent class
class Parent{
    void display(){
        System.out.println("display method called");
    }
}
//child class
class Child extends Parent{
    void show(){
        System.out.println("show method called");
    }
}
class Demo4{
    public static void main(String args[]){
        Child cobj = new Child();
        cobj.display();
        cobj.show();
    }
}