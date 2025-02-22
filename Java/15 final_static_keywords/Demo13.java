// program showing the concept of static block

class Student{
    static int count;
    Student(){
        count++;
    }
}
class Demo13{
    public static void main(String args[]){
        Student s;
            s = new Student();
            s = new Student();
            s = new Student();
            s = new Student();
            s = new Student();
        System.out.println("No. of objects created : "+Student.count);
    }
}