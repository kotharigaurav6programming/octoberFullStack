// program showing the concept of final keyword
// final class cannot be extended
/*
final class Demo{}
class Demo6 extends Demo{
    public static void main(String args[]){
        
    }
}
*/

final class Demo{
    void display(){
        System.out.println("display method called");
    }
}
class Demo6{
    public static void main(String args[]){
        Demo obj = new Demo();
        obj.display();
    }
}
