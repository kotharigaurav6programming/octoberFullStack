// program to convert temp from f to c

import java.util.Scanner;
class Demo3{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter temp in f : ");
        float f = sc.nextFloat();
        float c = (f-32)*5/9;
        System.out.println("Temp in c : "+c); 
    }
}