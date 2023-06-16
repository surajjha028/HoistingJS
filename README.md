#Hoisting - It is phenomenal in Javascript by which you can access variable and function, 
           even before you have initialize it or you haven't any value in it .
           OR
           In simple way , hoisting allows you to use functions and variables before they're declared .

#Hoisting in let and Const Variable 

#But before that we need to understand about temporal Dead Zone 

#Temporal Dead Zone :- It is the time, Since when this Let Variable was hoisted, till it is initialize
                      Some values, the time between this is known as temporal dead zone .

## Note :- When the variables are in temporal dead zone , we cannot access them. Until Some value has initialized in it .

#Let :- let variables can be updated but not re-declared .
       And Using a let variable before it is declared will result in a ReferenceError

#Const :- const variables can neither be updated nor re-declared
          And Suppose We have declared Const & then declared second variable with same name, it will result in a TypeError.

## CONST are more strict then LET variable .

## Note :- Let and Const are not allocated in Global scope . They are allocated Somewhere Else in the memory .
