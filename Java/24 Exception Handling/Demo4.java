// program showing the concept of exception handling

import java.util.Scanner;
class Demo4{
    static void divide(int a,int b){
        int c = a/b;
        System.out.println("Result : "+c);        
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        try{
            divide(a,b);
        }
        catch(ArithmeticException e){
            //System.out.println("Exception : "+e);
            e.printStackTrace();
        }
    }
}