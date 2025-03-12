/*
            RBI
            |-- rate()
                 |---- return 2.82 x
                 |---- return 3.32 x
                 |---- return 1.24 x

 SBI extends RBI       PNB extends RBI        BOI extends RBI    
  @Override              @Override            o/p : rate 1.0
  double rate()          double rate() 
    |-- 2.82               |-- return 3.32  

*/

