// example showing the concept of 1d array
import java.util.Scanner;
class Demo5{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Size : ");
        int size = sc.nextInt();
        int arr[] = new int[size];

        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }
        int i;
        for(i=0;i<size/2;i++){
            if(arr[i]!=arr[size-1-i])
                break;
        }
        if(i==size/2)
            System.out.println("Array is palindrome");
        else 
            System.out.println("Array is not palindrome");
    }
}