/*
    floyd's triangle
    1
    23
    456
    78910

    1 2 3 4 5 6 7 8 9 10 . . . . . 
   a=1 a++; 
 
*/

import java.util.Scanner;
class Demo7{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows : ");
        int rows = sc.nextInt();
        int a=1;
        for(int i=1;i<=rows;i++){
            for(int j=1;j<=i;j++){
                System.out.print(a++);
            }
            System.out.println();
        } 
    }
}