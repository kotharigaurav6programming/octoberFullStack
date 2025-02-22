// program showing the concept of static block

import java.util.Scanner;
class Student{
    String name,email;
    static String collegeName = "ABC College, Indore";
    Student(String name,String email){
        this.name=name;
        this.email=email;
    }
    static void getCollegeName(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter college name : ");
        collegeName = sc.nextLine();
    }
    void display(){
        System.out.println("Name : "+name);
        System.out.println("Email : "+email);
        System.out.println("CollegeName : "+collegeName);
    }
}
class Demo15{
    public static void main(String args[]){
        Student.getCollegeName();
        Student s1 = new Student("Andrew Anderson","andrew@gmail.com");
        Student s2 = new Student("Peter Parker","peter@gmail.com");
        
        s1.display();
        s2.display();
    }
}