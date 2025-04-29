Section 1 Assignments:
    Problem 1:
    Think: 
        The outputs of console.log() statements that I got are same as expected outputs and I observed that Counter A and Counter B maintains independent counts
        (i.e counterA() first gives output 1, then 2 and counterB() output is 1). 
        It is because each time we call the function createCounter(), a new count variable is initialized specific to the call and innerfunction remember its own count.
    Pitfall:
        Mostly we may think that count variable is shared globally between both the counters A and B but they are actually independent.

Problem 2:
    Think:
        I thought that the output would be same as expected one (i.e it will greet the names as expected with results)
    Pitfall:
        I observed and learnt that as var is function scoped, the i in the for loop starts at 0 and ends at 3 within 0 seconds of time and through out this forloop the names are checked later. But as the first setTimeOut runs after 0th sec taking the last value of i which is 3 by then , and the value at 3 is undefined so the console.log() gives the output as "Hello, undefined".
        So instead of using var, we have to use let (cause it has block scope) so for each iteration when i=0, the setTimeOut takes the value of i and executes console.log() and then similarly at i=2 and i=3 too it takes the values and executes.

Section 2 Assignments:
    part1 (task):
        predicting output: I thought the output would give a reference error and it happened to be same after I runned the code.

        Hoisting means moving the declarations to top their scope.
        var is hosted but it is unassigned where as let and const are hosted but not initialized
        which means that we can reference var variables before their declaration without error and they will be undefined but let and const variables usage before declaration throws a reference error.

    part2:
        Think:
            this in setTimeOut function refers to the property 'name' s value of the user object so as to access and use the value of 'name' property in console.log() statement.
            The output actually showed me 'Hello, !'
        Task:
            1. In above situation 'this' doesn't automatically refer to user object cause regular function
            determine their own 'this' at call time based on how they are called (i.e setTimeOut() calls the function without any object context) 
            2. so to make it correctly refer the user object we create a reference to store 'this' inside setTimeOut function such that before calling setTimeout, we store 'this' in a variable 'self' and inside setTimeOut() we use self.name instead of this.name
            3. I learnt and understood that Arrow function don't have their own 'this', they store 'this' from the greatDelayed() function where 'this' is pointed to user object so 'this.name' in arrow function is automatically user.name
            4. Task 4 is done in part2.html file.

    part3:
        Think:
            The inner increment and decrement functions can access the count variable declared in the outer function through closure. 
            Yes counterOne and counterTwo have independent counts.
        Task:
            1. A clousure is defined as a function written inside another function where the inner function can access the variables declared in the outer function. 
            when setUpCounter() is called with an initial value, a new scope gets created, inside this scope, a local variable 'count' is initialized to the initial value, the two inner functions increment() and decrement() access the count variable, increment/decrement it accordingly and return the count. The setUpCounter() then returns an object containing references to increment and decrement.

            2. I have created a createGreeting() function that takes an argument 'greeting' and returns another function(i.e inner function) that takes 'name' as an argument and this inner function returns greeting and name together. In function declaration, we are calling the outer function and passing 'Hello' as the argument and this outerfunction then returns it's inner function that takes an argument 'name'. 'sayHello' is a variable that stores the returned inner function and through this I passed 'Teertha' as the argument to inner function. And the inner function then returns the output in console as per the return statement in it (i.e 'Hello, Teertha').

            3. Done in Section 2 Assignments, part3.html

            4. Demonstration for using createSecretHolder- First we create function declaration for createSecretHolder() and stored it in a variable 'res', then access the 'secret' using getSecret(), then we update the secret and later try to access the secret directly which doesn't work, cause direct access is impossible, Only getSecret and setSecret allows controlled access (i.e encapsulation), so 'undefined' is returned and shown in console.

    part4:
        Think:
            I think if we call a function with fewer or more arguments than its explicitly defined parameters, we may get undefined in the console.
            The purpose of rest parameter is to make the function to accept multiple arguments as an array.
        Task:
            1. In JavaScript when a function is called with fewer or more arguments than its explicitly defined parameters, the missing parameters are assigned with values as 'undefined'.

            2. The purpose of rest parameter is to allow function to accept multiple arguments as array, the syntac of rest parameter is : 
                function function_name(arg1,arg2,...rest){
                    //statements
                } 

            3. Done in part4.html file in session 2 assignments folder

            4. I have created a processArguments() function with a 'mul' function as first argument and ...rest as another argument, this function returns mul() and the ...rest is passed to it as an argument within.
            I also created the mul() function separately with two arguments a & b passed to it, and this mul() returns a*b value. Then I have written console.log() statements with calling the processArgument() function inside it and the parameters passed to the processArgument() function are the mul() function as first argument and then any two values as the rest arguments, such that multiplication of those two values is returned and printed on console.