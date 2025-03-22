// example showing the concept of method reference
// reference to an instance method
import java.util.Scanner;
interface Showable{
    void display();
}
class Demo8{
    void show(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int sum = a+b;
        System.out.println("Sum : "+sum);
    }
    public static void main(String args[]){
        Showable obj = new Demo8() :: show;
        obj.display(); 
    }
} 