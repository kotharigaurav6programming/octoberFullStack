// Program to check whether entered year is a leap year or not

import java.util.Scanner;
class Demo11{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Year : ");
        int year = sc.nextInt();    

        String res = (year%4==0 && year%100!=0) || (year%400==0) ? "Year is a leap year" : "Year is not a leap year";   

        System.out.println(res);
    }
}