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
}
class Demo1{
    public static void main(String args[]){
        Product p1 = new Product(101,"ProductOne",1200);
        Product p2 = new Product(102,"ProductTwo",1500);
        System.out.println("Product Details : ");

        System.out.println("----ProductOne----\nProduct Id : "+p1.id);
        System.out.println("Product Name : "+p1.name);
        System.out.println("Product Price : "+p1.price);

        System.out.println("----ProductTwo----\nProduct Id : "+p2.id);
        System.out.println("Product Name : "+p2.name);
        System.out.println("Product Price : "+p2.price);

    } 
}