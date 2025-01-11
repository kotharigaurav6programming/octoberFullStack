//  recursion
import java.util.Scanner;
class Demo16{
    // Recursion function : where function calls itself in a repetative manner
    int fact(int num){
        if(num==0)
            return 1;
        else
            return num*fact(num-1);
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        Demo16 obj = new Demo16();
        System.out.println("Factorial : "+obj.fact(num));
    }
}
