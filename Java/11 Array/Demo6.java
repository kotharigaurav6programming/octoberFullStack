// example showing the concept of 1d array | program to insert an element at specific index
import java.util.Scanner;
class Demo6{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Size : ");
        int size = sc.nextInt();
        int arr[] = new int[size+1];

        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("Enter indexing : ");
        int index = sc.nextInt();
        System.out.println("Enter element : ");
        int element = sc.nextInt();

        for(int i=size-1;i>=index;i--){
            arr[i+1] = arr[i];
        }
        arr[index] = element;

        System.out.println("Array elements are : ");
        for(int a : arr){
            System.out.print(a+"\t");
        }
    }
}