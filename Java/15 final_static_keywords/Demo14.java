// program showing the concept of static block

class Student{
    String name,email;
    static String collegeName = "ABC College, Indore";
    Student(String name,String email){
        this.name=name;
        this.email=email;
    }
    void display(){
        System.out.println("Name : "+name);
        System.out.println("Email : "+email);
        System.out.println("CollegeName : "+collegeName);
    }
}
class Demo14{
    public static void main(String args[]){
        Student s1 = new Student("Andrew Anderson","andrew@gmail.com");
        Student s2 = new Student("Peter Parker","peter@gmail.com");
        
        s1.display();
        s2.display();
    }
}