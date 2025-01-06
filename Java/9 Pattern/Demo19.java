import java.util.Scanner;
class Demo19{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows : ");
        int rows = sc.nextInt();
        for(int i=1;i<=rows;i++){
            for(int j=1;j<=rows;j++){
                if(j==1 || j==rows ||i==1|| i==rows || i==j || i+j==rows+1)
                    System.out.print("*");
                else
                   System.out.print(" ");
            }
            System.out.println();
        } 
    }
}