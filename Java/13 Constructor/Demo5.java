// program showing the concept of constructor

class Demo5{
    Demo5(){
        int rno=56;
        float per = 89.5f;
        String name="Andrew Anderson";
        System.out.println("Default constructor called");
        System.out.println("Name : "+name);
        System.out.println("Percentage : "+per);
        System.out.println("Roll Number : "+rno);
    }
    public static void main(String args[]){
          Demo5 obj = new Demo5();
    }
}