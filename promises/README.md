## What is a promise
 - Its a object representing the eventual completion or failure of asynchronous operations

 - In essences, a promise is basically a returned object to which you attache callbacks, instead of passing into a function. 

 The Api design of promises make it great to create longer chains of processing, where each process represent the completion of one asychronous step in the chain.
 
 For example:

 ```
 doSomething()
   .then(function (result){
      return doSomethingElse(result);
   })
   .then(function (newResult){
     return doThirdThing(newResult);
   })
   .then(function (finalResult){
    console.log(`Got the final result: ${finalResult}`);
   })
   .catch(failureCallback);
 
 ```
 Example in arrow function
 ```
 doSomething()
    .then((result) => doSomethingElse(result))
    .then((newResult) => doThirdThing(newResult))
    .then((finalResult) => {
        console.log(`got the final result ${finalResult}`)
    })
 ```
 