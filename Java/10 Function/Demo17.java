//  call by value
import java.util.Scanner;
class Demo17{
    void swap(int a,int b){
        int temp=a;
        a=b;
        b=temp;
        System.out.println("After swapping in swap : \na : "+a+"\nb : "+b);
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        Demo17 obj = new Demo17();        
        System.out.println("Before swapping : \na : "+a+"\nb : "+b);
        obj.swap(a,b);
        System.out.println("After swapping in main : \na : "+a+"\nb : "+b);
    }
}
