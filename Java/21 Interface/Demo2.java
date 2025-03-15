// example showing the concept of interface
interface Showable{
    interface Drawable{
        void display(); // public abstract void display();
    }
}
class Demo2 implements Showable.Drawable{
    @Override
    public void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        Showable.Drawable obj = new Demo2();
        obj.display();
    }
}