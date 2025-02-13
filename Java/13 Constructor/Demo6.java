// program showing the concept of constructor

class Demo6{
    int rno;
    float per;
    String name;
    Demo6(){
        rno=56;
        per = 89.5f;
        System.out.println("Default constructor called");
    }
    void display(){
        System.out.println("Name : "+name);
        System.out.println("Percentage : "+per);
        System.out.println("Roll Number : "+rno);
    }
    public static void main(String args[]){
          Demo6 obj = new Demo6();
          obj.display();
    }
}