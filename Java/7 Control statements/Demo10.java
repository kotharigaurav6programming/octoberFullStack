// Program to check whether entered year is a leap year or not

import java.util.Scanner;
class Demo10{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Year : ");
        int year = sc.nextInt();    

        if(year%4==0){
            if(year%100==0){
                if(year%400==0)
                    System.out.println("Year is a leap year");
                else    
                    System.out.println("Year is not a leap year");
            }else
                System.out.println("Year is a leap Year");
        }else
            System.out.println("Year is not a leap Year");
    }
}