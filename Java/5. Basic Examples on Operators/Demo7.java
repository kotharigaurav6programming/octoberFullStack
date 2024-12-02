// Program showing the concept of operator
// Bitwise operator

class Demo7{
    public static void main(String args[]){
      int a = 9, b = 10, c;

      c = a&b;
      System.out.println(a+" & "+b+" = "+c);  
      c = a|b;
      System.out.println(a+" | "+b+" = "+c);  
      c = a^b;
      System.out.println(a+" ^ "+b+" = "+c);  
      c = 4<<2;
      System.out.println(4+" << "+2+" = "+c);  
      c = 4>>2;
      System.out.println(4+" >> "+2+" = "+c);  
      c = -10;
      System.out.println(c+" = "+(~c));  
      c = 5;
      System.out.println(c+" = "+(~c));  

    }
}