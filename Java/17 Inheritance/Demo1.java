// example showing the concept of inheritance

class Parent{
    void display(){
        System.out.println("display method called");
    }
}
class Child extends Parent{
    public static void main(String args[]){
        System.out.println("Example of inheritance");
        Child obj = new Child();
        obj.display();
    }
}