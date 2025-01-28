// example to multiply two 2d array
import java.util.Scanner;
class Demo19{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows and columns of first matrix: ");
        int r1 = sc.nextInt();
        int c1 = sc.nextInt();
        System.out.println("Enter rows and columns of second matrix: ");
        int r2 = sc.nextInt();
        int c2 = sc.nextInt();

        if(c1==r2){
            int arr1[][]=new int[r1][c1];
            int arr2[][]=new int[r2][c2];
            int arr3[][]=new int[r1][c2];

            System.out.println("Enter array elements of first matrix : ");        
            for(int i=0;i<r1;i++){
                for(int j=0;j<c1;j++){
                    arr1[i][j] = sc.nextInt();
                }
            }
            System.out.println("Enter array elements of second matrix : ");        
            for(int i=0;i<r2;i++){
                for(int j=0;j<c2;j++){
                    arr2[i][j] = sc.nextInt();
                }
            }
            System.out.println("Array elements of first matrix : ");        
            for(int i=0;i<r1;i++){
                for(int j=0;j<c1;j++){
                    System.out.print(arr1[i][j]+"\t");
                }
                System.out.println();
            }

            System.out.println("Array elements of second matrix : ");        
            for(int i=0;i<r2;i++){
                for(int j=0;j<c2;j++){
                    System.out.print(arr2[i][j]+"\t");
                }
                System.out.println();
            }
            // multiplication logic starts
                for(int i=0;i<r1;i++){
                    for(int j=0;j<c2;j++){
                        arr3[i][j] = 0;
                        for(int k=0;k<c1;k++){
                            arr3[i][j] = arr3[i][j] + arr1[i][k] * arr2[k][j];
                        }
                    }
                }
            // multiplication logic ends
            System.out.println("Resultant Array elements are : ");        
            for(int i=0;i<r1;i++){
                for(int j=0;j<c2;j++){
                    System.out.print(arr3[i][j]+"\t");
                }
                System.out.println();
            }
        }else{
            System.out.println("Multiplication not possible");
        }
    }
}