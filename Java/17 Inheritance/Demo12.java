// example showing the concept of Composition
class Engine{
    int engineCC;
    Engine(int engineCC){
        this.engineCC = engineCC;
    }
}
class Car{
    String name;
    int price;
    Engine obj;
    Car(String name,int price){
        this.name=name;
        this.price=price;
        this.obj=new Engine(100);
    }
    void printData(){
        System.out.println("Car name : "+name);
        System.out.println("Car price : "+price);
        System.out.println("Car engine : "+obj.engineCC);
    }
}
class Demo12{
    public static void main(String args[]){
        Car cobj = new Car("KIA",120000);
        cobj.printData();
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