// Program showing the concept of operator
// Logical operator

class Demo5{
    public static void main(String args[]){
        int a = 5, b=2;
        String res1 = (a > 10 && b < 5) ? "statement 1" : "statement 2";
        System.out.println(res1);

        String res2 = (a > 10 || b < 5) ? "statement 1" : "statement 2";
        System.out.println(res2);

        System.out.println(!(5>3));
        System.out.println(!(5<3));

    }
}