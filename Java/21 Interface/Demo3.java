// example showing the concept of interface
interface Showable{
        void show();
        void display(); // public abstract void display();
}
class Demo3 implements Showable{
    @Override
    public void display(){
        System.out.println("display method called");
    }
    @Override
    public void show(){
        System.out.println("show method called");
    }
    public static void main(String args[]){
        Showable obj = new Demo3();
        obj.display();
        obj.show();
    }
}