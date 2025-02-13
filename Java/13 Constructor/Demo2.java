// program showing the concept of constructor

class Demo2{
    // constructor
    Demo2(){
        System.out.println("Default constructor called");
    }
    public static void main(String args[]){
        new Demo2(); // anonymous object
        new Demo2(); // anonymous object
        new Demo2(); // anonymous object
    }
}