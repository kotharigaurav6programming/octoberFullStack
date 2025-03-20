// example showing the concept of interface
interface Drawable{
        void display();
        interface Showable extends Drawable{
            void show();
        }
}
abstract class Movable implements Drawable.Showable{
    abstract void move();
    void print(){
        System.out.println("print method called");
    }
    @Override
    public void display(){
        System.out.println("display method called of movable");
    }
}
class Demo10 extends Movable{
    @Override
    public void show(){
        System.out.println("show method called");
    }
    @Override
    public void display(){
        System.out.println("display method called of Demo10");
    }
    @Override
    public void move(){
        System.out.println("move method called of Demo10");
    }
    public static void main(String args[]){
        Movable obj1 = new Demo10();
        obj1.show(); 
        obj1.display();       
        obj1.move();
        obj1.print();
    }
}