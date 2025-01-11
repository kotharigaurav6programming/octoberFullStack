import java.util.Scanner;
class Demo11{
    void add(int a,int b){
        System.out.println("Add : "+(a+b));
    }
    void sub(int a,int b){
        System.out.println("Sub : "+(a-b));
    }
    void mul(int a,int b){
        System.out.println("Mul : "+(a*b));
    }
    void div(int a,int b){
        System.out.println("Div : "+(a/b));
    }
    void mod(int a,int b){
        System.out.println("Mod : "+(a%b));
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int a = sc.nextInt();
        System.out.println("Enter second number : ");
        int b = sc.nextInt();
        
        Demo11 obj = new Demo11();
        obj.add(a,b);
        obj.sub(a,b);
        obj.mul(a,b);
        obj.div(a,b);
        obj.mod(a,b);
    }
}
