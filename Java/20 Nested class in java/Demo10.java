// Nested class in java (non-static nested class | inner class | Anonymous class)

abstract class Demo{
    abstract void display();
}
class Demo10{
    public static void main(String args[]){
        // creation of anonymous class
        Demo obj = new Demo(){
            void display(){
                System.out.println("display method called");
            }  
        };
        obj.display();
    }
}