// example showing the concept of lambda expression(arrow function)

interface Showable{
    void display();
}
class Demo2{
    public static void main(String args[]){
        Showable obj = ()->System.out.println("display method called");
        obj.display();
    }
}