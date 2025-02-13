// example showing the concept of getter and setter method

// class Demo9{
//   // private data member   
//   private String name="Andrew Anderson";  
//   public static void main(String args[]){
//     Demo9 obj = new Demo9();
//     System.out.println("Name : "+obj.name);
//   }
// }

class Student{
    // private data member   
    private String name="Andrew Anderson";  
    // getter method
    public String getName(){
        return name;
    }
}
class Demo9{
  public static void main(String args[]){
    Student obj = new Student();
    System.out.println("Name : "+obj.getName());
  }
}