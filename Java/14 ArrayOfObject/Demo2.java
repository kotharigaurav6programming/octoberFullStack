// program 

class Product{
    int id;
    String name;
    double price;
    Product(int id,String name,double price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
    void display(){
        System.out.println("Product Id : "+id);
        System.out.println("Product Name : "+name);
        System.out.println("Product Price : "+price);
    }
}
class Demo2{
    public static void main(String args[]){
        Product p1 = new Product(101,"ProductOne",1200);
        Product p2 = new Product(102,"ProductTwo",1500);
        System.out.println("Product Details : \n");
        System.out.println("----ProductOne----\n");
            p1.display();
        System.out.println("----ProductTwo----\n");
            p2.display();
    } 
}