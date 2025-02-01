// example with varargs
/*
    varargs = var(variable) + args(arguments)
*/

class Demo6{
    void test(String name,int...args){
        System.out.println("\nlength : "+(args.length+1));
        System.out.print(name+"\t");
        for(int element : args){
            System.out.print(element+"\t");
        }
    }
    public static void main(String args[]){
        Demo6 obj = new Demo6();
        obj.test("demo_name",5);
        obj.test("demo_name",6,7);
        obj.test("demo_name",6,7,5);
        obj.test("demo_name",6,7,6,8);
        obj.test("demo_name",6,7,4,5,6);
    }
}