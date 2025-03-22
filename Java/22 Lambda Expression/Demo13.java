// example showing the concept of method reference
// reference to a constructor
import java.util.Scanner;
interface Showable{
    void display(int c,int d);
}
class Demo13{
    Demo13(int e,int f){
        System.out.println("sum : "+(e+f));
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        Showable obj =  Demo13 :: new;
        obj.display(a,b); 
    }
} 

