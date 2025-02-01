// example showing the concept of getter and setter method

import java.util.Scanner;
class Demo8{
    String name;
    int age;
    void setAge(int age){
        this.age=age;
    }
    void setName(String name){
        this.name=name;
    }
    int getAge(){
        return age;
    }
    String getName(){
        return name;
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter age : ");
        int age  = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter name : ");
        String name  = sc.nextLine();

        Demo8 obj = new Demo8();
        obj.setAge(age);
        obj.setName(name);

        System.out.println("Age : "+obj.getAge());
        System.out.println("Name : "+obj.getName());
   }
}