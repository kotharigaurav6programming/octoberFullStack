// example showing the concept of lambda expression(arrow function)
interface Showable{
    void display();
}
class Demo3{
    static int a=100;
    static void show(){
        System.out.println("show method called..!!");
    }
    int b=200;
    void display(){
        System.out.println("display method called..!!");
    }
    public static void main(String args[]){
        Showable obj = ()->{
            System.out.println("value of a : "+a);
            show();
            Demo3 obj1 = new Demo3();
            System.out.println("value of b : "+obj1.b);
            obj1.display();
        };
        obj.display();
    }
}