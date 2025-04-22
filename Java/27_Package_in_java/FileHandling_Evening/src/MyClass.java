import java.util.Scanner;
public class MyClass {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        GetSum obj = new GetSum();
        System.out.println("Sum : "+obj.findSum(a,b));
    }
}
