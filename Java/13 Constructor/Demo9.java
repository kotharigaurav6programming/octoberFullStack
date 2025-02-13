// program showing the concept of Parameterized constructor
import java.util.Scanner;
class Student{
    int rno;
    double per;
    String name;

    // parameterized constructor
    Student(String name,int rno,double per){
        this.name=name;
        this.rno=rno;
        this.per=per;
    }
    Student(Student sobj){
        name = sobj.name;
        rno = sobj.rno;
        per = sobj.per;
    }

    void display(){
        System.out.println("Name : "+name);
        System.out.println("Roll Number : "+rno);
        System.out.println("Percentage : "+per);
    }
}

class Demo9{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Roll Number : ");
        int rno = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter name : ");
        String name = sc.nextLine();
        
        System.out.println("Enter Percentage : ");
        double per = sc.nextDouble();

        Student sobj = new Student(name,rno,per);  // parameterized constructor
        sobj.display();
        System.out.println("After Copying : ");
        Student obj = new Student(sobj);
        obj.display();
    }  
}