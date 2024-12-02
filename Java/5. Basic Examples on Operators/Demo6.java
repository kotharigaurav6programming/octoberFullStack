// Program showing the concept of operator
// Increment | decrement operator

class Demo6{
    public static void main(String args[]){
        int a = 5, result;
        result = a++ + ++a - a++ - --a + a--;
        //        5  +  7  -  7  -   7 + 7         
        System.out.println("Result : "+result);
    }
}