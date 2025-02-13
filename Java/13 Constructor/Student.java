class Student{
    int rno;
    double per;
    String name;

    // default constructor
    Student(){
        System.out.println("Default constructor called");
    }
    // parameterized constructor
    Student(String name,int rno,double per){
        this.name=name;
        this.rno=rno;
        this.per=per;
    }
    void display(){
        System.out.println("Name : "+name);
        System.out.println("Roll Number : "+rno);
        System.out.println("Percentage : "+per);
    }
}
