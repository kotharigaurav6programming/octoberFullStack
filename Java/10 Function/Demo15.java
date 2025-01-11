//  this keyword can also be passed as an argument in function calling
class Demo15{
    int a = 100;
    void display(Demo15 handleObj){
        System.out.println("value of a : "+handleObj.a);
        System.out.println("object : "+handleObj);
    }
    void show(){
        System.out.println("value of a : "+a);
        this.a = 200;
        display(this);    
    }
    public static void main(String args[]){
        Demo15 obj = new Demo15();
        obj.show();
    }
}
