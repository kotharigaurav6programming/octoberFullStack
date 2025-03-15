// Nested class in java (static nested class)
// Enclosing class
class Demo4{ 
    // static nested class
    static class NestedClass{
           
        public int a = 100;
        protected int b = 200;
        private String name= "Andrew Anderson";

        void display(){
            System.out.println("Name : "+name);
            System.out.println("value of a : "+a);
            System.out.println("Value of b : "+b);
        }
    } 
    public static void main(String args[]){
        NestedClass obj = new NestedClass();
        obj.display();
    }
}
