// program showing the concept of exception handling

import java.util.Scanner;
class Demo7{
    static void divide(int a,int b){
        try{
            int c = a/b;
            if(c>=5)
                throw new NullPointerException("Result greater than or equals to 5");
            System.out.println("Result : "+c); 
        }
        catch(ArithmeticException | NullPointerException e){
            e.printStackTrace();
        }
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        divide(a,b);
    }
}