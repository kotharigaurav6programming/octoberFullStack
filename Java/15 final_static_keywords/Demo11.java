// program showing the concept of static block

class Demo{
    static String fname="Peter";
}
class Demo11{
    static String name;
    static{
        name = "Andrew Anderson";
        System.out.println("statement Demo11 name : "+name);
    }
    public static void main(String args[]){
        System.out.println("name : "+Demo11.name);
        System.out.println("name : "+name);
        System.out.println("name : "+Demo.fname);
    }
}