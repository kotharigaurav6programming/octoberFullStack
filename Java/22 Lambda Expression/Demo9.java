// example showing the concept of method reference
// reference to an instance method
import java.util.Scanner;
interface Showable{
    int display(int c,int d);
}
class Demo9{
    int show(int e,int f){
        return e+f;
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
       
        Showable obj = new Demo9() :: show;
        System.out.println("Sum : "+obj.display(a,b)); 
    }
} 