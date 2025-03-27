// example showing the concept of toString method

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
    public String toString(){
        return rno+"  "+name+"\n";
    }
}
class Demo2{
    public static void main(String args[]){
        Student s1 = new Student(101,"Andrew Anderson");
        s1.display();
        System.out.println(s1);
        System.out.println(s1.toString());
    }
}