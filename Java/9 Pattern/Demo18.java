/*
    ***** *****
    *   * *   *
    ***** *****
    *   * *   *
    *   * *****
*/

class Demo18{
    public static void main(String args[]){
        for(int i=1;i<=5;i++){
            for(int j=1;j<=11;j++){
                if(j==1 || j==7 ||j==11|| j==5 || i==3&&j!=6 || i==1 && j!=6 || i==5&&j>=7)
                    System.out.print("*");
                else
                   System.out.print(" ");
            }
            System.out.println();
        } 
    }
}