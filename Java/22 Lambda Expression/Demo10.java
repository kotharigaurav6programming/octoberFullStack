// example showing the concept of method reference
// reference to an instance method
import java.util.Scanner;
interface Showable{
    int display(int c,int d);
    default int show(int e,int f){
        return e+f;
    }
}
class Demo10 implements Showable{
    public int display(int c,int d){return 0;}
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        Showable obj1 = new Demo10(); 
        Showable obj =  obj1 :: show;
        System.out.println("Sum : "+obj.display(a,b)); 
    }
} 

