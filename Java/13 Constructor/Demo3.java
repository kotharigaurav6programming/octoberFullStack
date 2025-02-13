// program showing the concept of constructor

class Demo3{
    // constructor
    Demo3(){
        System.out.println("Default constructor called");
    }
    void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        // new Demo3().display(); // anonymous object
        // new Demo3().display(); // anonymous object
        // new Demo3().display(); // anonymous object
        Demo3 obj = new Demo3();
        obj.display();
        obj.display();
        obj.display();
    }
}