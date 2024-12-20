// program showing the concept of looping control statement | Table of a number

import java.util.Scanner;
class Demo2{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();

        for(int i=1;i<=10;i++){
            System.out.println(num+" x "+i+" = "+(num*i));
        }        
    }
}