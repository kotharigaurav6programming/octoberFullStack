// example showing the concept of 1d array
import java.util.Scanner;
class Demo4{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Size : ");
        int size = sc.nextInt();
        int arr[] = new int[size];

        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("Array elements are : ");
        int sum=0;
        for(int i=0;i<size;i++){
            System.out.print(arr[i]+"\t");
            sum = sum + arr[i];
        }
        System.out.println("sum : "+sum);
    }
}