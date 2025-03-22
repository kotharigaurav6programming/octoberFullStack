// example showing the concept of method reference
// reference to an static method
import java.util.Scanner;
interface Showable{
    int display(int c,int d);
    static int show(int e,int f){
        return e+f;
    }
}
class Demo11{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        Showable obj =  Showable :: show;
        System.out.println("Sum : "+obj.display(a,b)); 
    }
} 

