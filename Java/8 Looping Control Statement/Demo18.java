// Program showing the concept of armstrong

import java.util.Scanner;
class Demo18{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        int temp = num;
        int temp1 = num;
        int count=0,rem=0,sum=0;
        while(num>0){
            num=num/10;
            count++;
        }
        while(temp>0){
            rem = temp%10;
            sum = sum + (int)(Math.pow(rem,count));
            temp = temp/10;
        }
        if(temp1==sum)
            System.out.println("Number is armstrong");
        else
            System.out.println("Number is not armstrong");
    }
}