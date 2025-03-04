// program showing the concept of method overloading
// compile time polymorphism

class Demo1{
    void greater(int a,int b){
        int res = a>b?a:b;
        System.out.println(res+" is greater");
    }
    void greater(int a,int b,int c){
        int res = a>b?(a>c?a:c):(b>c?b:c);
        System.out.println(res+" is greater");
    }
    public static void main(String args[]){
        Demo1 obj = new Demo1();
        obj.greater(34,45);
        obj.greater(43,345,56);
    }
}