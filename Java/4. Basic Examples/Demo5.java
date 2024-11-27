// program

class Demo5{
    public static void main(String args[]){
        int a=012;
        System.out.println("value of a : "+a);
        int b=0x12;
        System.out.println("value of b : "+b);

        // Adding two numbers without using + operator
        int c = 5 - (-6);
        System.out.println("Result : "+c);

        // doubling a number without adding and without multiply by 2
        int d = 25<<1;
        System.out.println("Result : "+d);

        System.out.println("Result : "+(5<2));

    }
}

/*
012 = octal number system (0-7)
here 0 represents octal number 

          1        2
        1 x 8^1 + 2 x 8^0
        1 x 8  + 2 x 1
           8 + 2 
             10

0x12 = hexa decimal (0-15)
0   1   2   3   4   5   6   7   8   9   A   B   C   D   E   F   
                                        10   11  12  13  14  15 
here 0x represents hexa decimal
          1        2
        1 x 16^1 + 2 x 16^0
        1 x 16  + 2 x 1
           16 + 2 
             18

*/
