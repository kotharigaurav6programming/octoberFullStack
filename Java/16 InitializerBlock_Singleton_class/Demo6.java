// program showing the concept of initializer block

class Demo6{
        // static block
        static{
            System.out.println("static block executes");
        }
        // initializer block
        {
            System.out.println("initializer block");
        }
        // constructor
        Demo6(){
            // here initialize block executes    
            System.out.println("constructor");
        }
    public static void main(String args[]){
        Demo6 obj = new Demo6();
    }
}