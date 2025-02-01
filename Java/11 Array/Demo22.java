// example showing the concept of multidimensional array
import java.util.Scanner;
class Demo22{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no. of 2d matrix : ");
        int num = sc.nextInt();
        System.out.println("Enter no. of rows : ");
        int r = sc.nextInt();
        System.out.println("Enter no. of columns : ");
        int c = sc.nextInt();

        int arr[][][] = new int[num][r][c];

        System.out.println("Enter array elements : ");
        // no. of 2d matrix
        for(int i=0;i<num;i++){
            // represents rows
            System.out.println("Enter "+(i+1)+" matrix elements : ");
            for(int j=0;j<r;j++){
                // represents columns
                    for(int k=0;k<c;k++){
                        arr[i][j][k] = sc.nextInt();
                    }
            }
        }

        System.out.println("Array elements are : ");
        for( int ar[][] :  arr){
            for( int a[] :  ar){
                for(int element : a){
                    System.out.print(element+"\t");
                }
                System.out.println();
            }
            System.out.println();
        }
    }
}

/*
    0   1   2   3   4     indexing 1d array

    00  01  02
    10  11  12
    20  21  22     indexing 2d array

    multidimensional array indexing

    ijk
    000 001 002
    010 011 012     
    020 021 022  

    ijk
    100 101 102
    110 111 112     
    120 121 122  

    */