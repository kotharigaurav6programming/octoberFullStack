//  call by reference
import java.util.Scanner;
class Demo18{
    int a,b;
    void setData(int a,int b){
        this.a=a;
        this.b=b;
    }
    void swap(Demo18 obj){
        int temp=obj.a;
        obj.a=obj.b;
        obj.b=temp;
        System.out.println("After swapping in swap : \na : "+obj.a+"\nb : "+obj.b);
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        Demo18 obj = new Demo18();        
        obj.setData(a,b);
        System.out.println("Before swapping : \na : "+obj.a+"\nb : "+obj.b);
        obj.swap(obj);
        System.out.println("After swapping in main : \na : "+obj.a+"\nb : "+obj.b);
    }
}
