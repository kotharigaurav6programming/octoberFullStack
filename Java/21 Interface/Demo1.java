// example showing the concept of interface
interface Showable{
    void display(); // public abstract void display();
}
class Demo1 implements Showable{
    @Override
    public void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        Showable obj = new Demo1();
        obj.display();
    }
}