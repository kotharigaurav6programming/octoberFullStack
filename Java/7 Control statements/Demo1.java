// Program to find out compound Interest

import java.util.Scanner;
class Demo1{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter p,r and t : ");
        int p = sc.nextInt();
        double r = sc.nextDouble();
        int t = sc.nextInt();

        double amt = p*Math.pow(1+r/100,t);
        double ci = amt-p;

        System.out.println("Amount : "+amt);
        System.out.println("Compund Interest : "+ci);
    }
}