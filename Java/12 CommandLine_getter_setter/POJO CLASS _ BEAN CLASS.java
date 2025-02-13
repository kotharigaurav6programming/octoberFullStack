Pojo Class Vs Bean Class
------------------------
Pojo Class 
----------
Pojo class does not follows any special restrictions other than those provided by JLS(Java Language Specification).

Restrictions : 
--------------
1. Pojo class can implements Serializable Interface.
2. Data members can be public, private, protected or default(package private).
3. Member functions can be public , private, protected or default(package private).
4. It can contains default and parameterized constructor.

Bean Class 
----------
Bean class follows special restrictions other than those provided by JLS(Java Language Specification).

Restrictions : 
--------------
1. Bean class must needs to implements Serializable Interface.
2. Data members must be private.
3. Member functions must be public.
4. It must contains default constructor.
