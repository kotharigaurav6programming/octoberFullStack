// program showing the concept of initializer block

class Demo5{
        final int a;
        // initializer block
        {
            a = 20;
            System.out.println("value of a : "+a);
        }
    public static void main(String args[]){
        Demo5 obj = new Demo5();
        System.out.println("value of a : "+obj.a);
    }
}