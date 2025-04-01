// program showing the concept of exception handling

import java.util.Scanner;
class Demo3{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        try{
            int c = a/b;
            System.out.println("Result : "+c);        
        }
        catch(ArithmeticException e){
            //System.out.println("Exception : "+e);
            e.printStackTrace();
        }
    }
}