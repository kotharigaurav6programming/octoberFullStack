// program showing the concept of type casting

class Demo7{
    public static void main(String args[]){
        // implicit type casting
        int a = 100;
        double b = a;
        System.out.println("Result : "+b);

        // explicit type casting
        //float c = 100.67f;
        double c = 100.67;
        int d = (int)c;
        System.out.println("Result : "+d);
    }
}

