// program showing the concept of constructor chaining
class Student{
    int rno;
    double per;
    String name;

    Student(){
        this(101);
        System.out.println("Default constructor called");
    }
    Student(int rno){
        this(rno,"Andrew Anderson");
    }
    Student(int rno,String name){
        this(rno,name,78.90);
    }
    // parameterized constructor
    Student(int rno,String name,double per){
        this.name=name;
        this.rno=rno;
        this.per=per;
        display();
    }
    void display(){
        System.out.println("Name : "+name);
        System.out.println("Roll Number : "+rno);
        System.out.println("Percentage : "+per);
    }
}

class Demo11{
    public static void main(String args[]){
        Student obj = new Student();
        
    }  
}