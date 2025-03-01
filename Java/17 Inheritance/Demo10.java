// example showing the concept of Association
class Library{
    String bookName;
    Library(String bookName){
        this.bookName = bookName;
    }
}
class Student{
    String studentName;
    Student(String studentName){
        this.studentName = studentName;
    }
    void getBookName(Library lobj){
        System.out.println("Book Name : "+lobj.bookName);
    }
}
class Demo10{
    public static void main(String args[]){
        Student sobj = new Student("Andrew Anderson");
        Library lobj = new Library("Programming in Java");
        sobj.getBookName(lobj);
    }
}


/*
Inheritance: Is-a Relationship

                Association (Student ---> Library)
        _____________|_____________
        |                         |
    Aggregation               Composition
    has-a relationship        has-a relationship    
    (Weak association)        (Strong association)

  Department --> Teacher      Car --> Engine 
*/