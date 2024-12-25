//program showing the concept of continue statement
class Demo10{
    public static void main(String args[]){
        for(int i=1;i<=3;i++){
            System.out.println("i : "+i);
            for(int j=1;j<=3;j++){
                if(i==2 && j==2)
                    continue;
                System.out.println("\tj : "+j);
            }
        }
    }
}