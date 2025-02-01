// example with varargs
/*
    varargs = var(variable) + args(arguments)
*/

class Demo5{
    void test(int...args){
        System.out.println("\nlength : "+args.length);
        for(int element : args){
            System.out.print(element+"\t");
        }
    }
    public static void main(String args[]){
        Demo5 obj = new Demo5();
        obj.test(5);
        obj.test(6,7);
        obj.test(6,7,5);
        obj.test(6,7,6,8);
        obj.test(6,7,4,5,6);
    }
}