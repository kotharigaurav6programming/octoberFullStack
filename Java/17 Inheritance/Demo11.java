// example showing the concept of Aggregation
class Teacher{
    String name;
    Teacher(String name){
        this.name = name;
    }
}
class Department{
    String departmentName;
    Teacher obj;
    Department(String departmentName,Teacher obj){
        this.departmentName = departmentName;
        this.obj=obj;
    }
    void showDetails(){
        System.out.println("Teacher name : "+obj.name);
        System.out.println("Department Name : "+departmentName);
    }
}
class Demo11{
    public static void main(String args[]){
        Teacher tobj = new Teacher("Andrew Anderson");
        Department dobj = new Department("Computer Science",tobj);
        dobj.showDetails();
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