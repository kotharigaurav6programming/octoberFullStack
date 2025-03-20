// example showing the concept of lambda expression(arrow function)
import java.util.Scanner;
interface Showable{
    void calculate();
}
class Demo4{
    public static void main(String args[]){
        Showable obj = ()->{
           Scanner sc = new Scanner(System.in);
           System.out.println("Enter value of a : ");
           int a = sc.nextInt();
           System.out.println("Enter value of b : ");
           int b = sc.nextInt();
           System.out.println("Sum : "+(a+b));
        };
        obj.calculate();
    }
}