//program showing the concept of break statement
class Demo9{
    public static void main(String args[]){
        for(int i=1;i<=3;i++){
            System.out.println("i : "+i);
            for(int j=1;j<=3;j++){
                if(i==2 && j==2)
                    break;
                System.out.println("\tj : "+j);
            }
        }
    }
}