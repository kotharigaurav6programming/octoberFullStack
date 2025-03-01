// program showing the concept of inheritance (Hierarchical Inheritance)
import java.util.Scanner;
class Person{
    String name;
    int age;
    void getDetails(){
        Scanner sc = new Scanner(System.in);        
        System.out.println("Enter Name : ");
        name = sc.nextLine();       
        System.out.println("Enter Age : ");
        age = sc.nextInt();
    }
    void showDetails(){
        System.out.println("Details : ");
        System.out.println("Name : "+name);
        System.out.println("Age : "+age);
    }
}
class Student extends Person{
    String course;
    int fees;
    void getStudDetails(){
        getDetails();
        Scanner sc = new Scanner(System.in);        
        System.out.println("Enter Course Name : ");
        course = sc.nextLine();       
        System.out.println("Enter Fees : ");
        fees = sc.nextInt();
    }
    void showStudDetails(){
        showDetails();
        System.out.println("Course Name : "+course);
        System.out.println("Fees : "+fees);
    }
}
class Employee extends Person{
    String designation;
    int salary;
    void getEmpDetails(){
        getDetails();
        Scanner sc = new Scanner(System.in);        
        System.out.println("Enter Designation : ");
        designation = sc.nextLine();       
        System.out.println("Enter Salary : ");
        salary = sc.nextInt();
    }
    void showEmpDetails(){
        showDetails();
        System.out.println("Designation : "+designation);
        System.out.println("Salary : "+salary);
    }
}

class Demo8{
    public static void main(String args[]){
        Student s = new Student();
        Employee e = new Employee();
            s.getStudDetails();
            e.getEmpDetails();

            s.showStudDetails();
            e.showEmpDetails();
    }
}

/*
            Hierarchical Inheritance
            -------------------------
                ParentClass
        _____________|_____________
        |                          |
   Child1Class                Child2Class

                   Person
                     |  |-- name, age (data member)
                     |  |-- getDetails() , showDetails() (member function)
        _____________|_____________
        |                          |
    Student                    Employee
    |-- course                  |-- designation   
    |-- fees                    |-- salary
    |-- getStudDetails()        |-- getEmpDetails()
         |-- getDetails()            |-- getDetails() 
    |-- showStudDetails()       |-- showEmpDetails()  
         |-- showDetails()           |-- showDetails()

*/ 
         

         