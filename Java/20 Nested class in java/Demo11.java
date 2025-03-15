// Nested class in java (non-static nested class | inner class | Anonymous class)

abstract class Demo{
    abstract void display();
}
class Demo11{
    public static void main(String args[]){
        // creation of anonymous class
        new Demo(){
            void display(){
                System.out.println("display method called");
            }  
        }.display();
    }
}