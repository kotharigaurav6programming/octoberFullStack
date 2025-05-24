// program showing the concept of initializer block

class Demo1{
    public static void main(String args[]){
        int a = 10;
        // normal block
        {
            int b = 20;
            System.out.println("value of a : "+a);
            System.out.println("value of b : "+b);
        }
//      System.out.println("value of b : "+b);
    }
}