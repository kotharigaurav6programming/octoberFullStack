import java.util.Scanner;
class Demo10{
    void operation(int a,int b){
        System.out.println("Add : "+(a+b));
        System.out.println("Sub : "+(a-b));
        System.out.println("Mul : "+(a*b));
        System.out.println("Div : "+(a/b));
        System.out.println("Mod : "+(a%b));
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int a = sc.nextInt();
        System.out.println("Enter second number : ");
        int b = sc.nextInt();
        
        Demo10 obj = new Demo10();
        obj.operation(a,b);
    }
}
