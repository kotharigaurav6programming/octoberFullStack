//program showing the concept of shallow copy and deep copy

/*
            shallow copy

                   Student 
        ______________|_______________
        |                             |
      obj1                           obj2
        |----name--- andrew ----name--|
        |----age---    67    ----age--|
        |---address-   ref  -address--|
                   _____|_____
                   |          |
                 city       state     

*/

class Address{
    String city,state;
    Address(String city,String state){
        this.city=city;
        this.state=state;
    }
}
class Student{
    String name;
    int age;
    Address address;
    Student(String name,int age,Address address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    Student(Student obj1){
        this.name = obj1.name;
        this.age = obj1.age;
        this.address = obj1.address;
    }
}
class Demo15{
    public static void main(String args[]){
        Address address = new Address("Indore","Madhya Pradesh");
        Student obj1 = new Student("Andrew Anderson",56,address); 
        Student obj2 = new Student(obj1);
        
        obj2.address.city = "Jabalpur";
        obj2.address.state = "Madhya Pradesh";
        
        System.out.println("Student obj1 : ");
        System.out.println("Name : "+obj1.name);
        System.out.println("Age : "+obj1.age);
        System.out.println("City : "+obj1.address.city);
        System.out.println("State : "+obj1.address.state);

        System.out.println("\nStudent obj2 : ");
        System.out.println("Name : "+obj2.name);
        System.out.println("Age : "+obj2.age);
        System.out.println("City : "+obj2.address.city);
        System.out.println("State : "+obj2.address.state);

    }
}