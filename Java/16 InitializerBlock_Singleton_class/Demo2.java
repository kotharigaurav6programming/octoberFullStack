// program showing the concept of initializer block

class Demo2{
    static{
        int a = 10;
        // initializer block
        {
            int b = 20;
            System.out.println("value of a : "+a);
            System.out.println("value of b : "+b);
        }
    }
    public static void main(String args[]){
    }
}