// program showing the concept of static block

class Demo{
    static void display1(){
        System.out.println("display1 method called");
    }
}
class Demo12{
    static void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        Demo12.display();
        display();
        Demo.display1();
    }
}