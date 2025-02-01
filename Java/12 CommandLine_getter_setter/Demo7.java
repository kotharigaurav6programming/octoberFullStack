// example showing the concept of normal setting up of data and printing data

import java.util.Scanner;
class Demo7{
    String name;
    int age;
    void setData(String name,int age){
        this.name=name;
        this.age=age;
    }
    void showData(){
        System.out.println("Name : "+name+"\nAge : "+age);
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter age : ");
        int age  = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter name : ");
        String name  = sc.nextLine();

        Demo7 obj = new Demo7();
        obj.setData(name,age);
        obj.showData();
   }
}