// example showing the concept of lambda expression(arrow function)
import java.util.Scanner;
interface Showable{
    void calculate(int a,int b);
}
class Demo5{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
           System.out.println("Enter value of a : ");
           int a = sc.nextInt();
           System.out.println("Enter value of b : ");
           int b = sc.nextInt();

        Showable obj = (int a1,int b1)->{
           System.out.println("Sum : "+(a1+b1));
        };
        obj.calculate(a,b);
    }
}