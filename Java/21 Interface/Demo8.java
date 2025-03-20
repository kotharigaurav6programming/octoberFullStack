// example showing the concept of interface
abstract class Showable implements Drawable{
        abstract void show();
}
interface Drawable{
        void display();
}
class Demo8 extends Showable{
    @Override
    public void show(){
        System.out.println("show method called");
    }
    @Override
    public void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        Showable obj1 = new Demo7();
        obj1.show(); 
        obj1.display();       
    }
}