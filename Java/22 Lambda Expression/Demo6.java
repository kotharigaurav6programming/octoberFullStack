// example showing the concept of lambda expression(arrow function)
import java.util.Scanner;
interface Showable{
    int calculate(int a,int b);
}
class Demo6{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
           System.out.println("Enter value of a : ");
           int a = sc.nextInt();
           System.out.println("Enter value of b : ");
           int b = sc.nextInt();

        Showable obj = (int a1,int b1)->{
            return a1+b1;
        };
         System.out.println("Sum : "+obj.calculate(a,b));
    }
}