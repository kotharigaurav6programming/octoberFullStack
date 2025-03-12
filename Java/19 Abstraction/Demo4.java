// example showing the concept of Abstract class

abstract class MyClass{
    abstract void display();
}
class Demo4 extends MyClass{
    @Override
    void display(){
        System.out.println("display method called of child");
    } 
    public static void main(String args[]){
        MyClass obj = new Demo4();
        obj.display();
    }
}