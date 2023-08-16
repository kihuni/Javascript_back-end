## What is a promise
 - Its a object representing the eventual completion or failure of asynchronous operations and its resulting value

  In essence, a promise is a returned object to which you attach callbacks instead of passing into a function. 


 ```
 You can also define a promise as a proxy for a value, which allows you to associate handlers with asynchronous actions eventual success value or actions.This allows asychronous methods to return values like sychronous methods: instead of immediately returning the final value, the asychronous method returns a promise to supply the value at some point in the future.

```
Promise always is in one of these states. Either:

    pending: initial state, neither fulfilled nor rejected
    fulfilled: meaning that operatons completely successful
    rejected: meaning that operation failed

  ![picture showing the process of promise states](https://github.com/kihuni/Javascript_back-end/blob/main/Screenshot%20from%202023-08-16%2002-31-19.png)
              
 The Api design of promises make it great to create longer chains of processing, where each process represent the completion of one asychronous step in the chain.
 
 Example of Chaining:

 ```
 doSomething()ettings
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
 As you do all that, remember to always makes sure the promise is returned. Otherwise callbacks won't catch the result of a previous promise.

 For example, if a previous handler didn't return a promise, there is no way to track its settlement anymore. The promise is said to be floating.

```
doSomething()
   .then((url) => {
      // forgot to return a promise
      fetch(url);
   })
   .then((result) => {
     // result is undefined, because nothing is returned
     // from the previous handler.
     // there is no way to know the return of the fetch call anymore, or whether it succeeded at all
   })
```
Its important to make sure the previous promise is returned to avoid situation of returning an incomplete value

```
const listsofingredients = []

doSomething()
  .then((url) => {
     // forgot to return a promise
     fetch(url)
       .then((res) => res.json())
       .then((data) => {
          listofingredients.push(data)
       })
  })
  .then(() => {
    console.log(listofingredients)
    // will return an empty[], because the promise was not returned. fetch request hasn't completed yet.
  })
```
## Promise concurrency
 The promise class offers four static methods to facilitate asyc task concurrency

 - promise.all()
 Fulfills when all of the promises fulfills;rejects  when any of the promise rejects

 - promise.allSettled()
 Fulfils when all promises settle

 - promise.any()
 Fulfils when any of the promises fulfills;rejects when all of the promise reject

 - promise.race()
 Settles when any of the promises settles.in other words, fulfills when any of the promises fulfills;rejects when any of the promise rejects

 