// example showing the concept of hashCode method

class Student{
    int rno;
    String name;
    Student(int rno,String name){
        this.rno=rno;
        this.name=name;
    }
    void display(){
        System.out.println("Roll Number : "+rno+"\nName : "+name);
    }
    @Override
    public int hashCode(){
        return rno;
    }
}
class Demo3{
    public static void main(String args[]){
        Student s1 = new Student(101,"Andrew Anderson");
        s1.display();
        System.out.println("\nhashCode of s1 : "+s1.hashCode());

        Student s2 = new Student(101,"Andrew Anderson");
        s2.display();
        System.out.println("\nhashCode of s2 : "+s2.hashCode());

        Student s3 = new Student(102,"Mathew Math");
        s3.display();
        System.out.println("\nhashCode of s3 : "+s3.hashCode());

        String s4 = "Aa";
        String s5 = "BB";
        System.out.println("\nhashCode of s4 : "+s4.hashCode());
        System.out.println("hashCode of s5 : "+s5.hashCode());

        String s6 = "Andrew";
        String s7 = "Andrew";
        System.out.println("\nhashCode of s6 : "+s6.hashCode());
        System.out.println("hashCode of s7 : "+s7.hashCode());

        String s8 = "Andrew";
        String s9 = "Mathew";
        System.out.println("\nhashCode of s8 : "+s8.hashCode());
        System.out.println("hashCode of s9 : "+s9.hashCode());

    }
}