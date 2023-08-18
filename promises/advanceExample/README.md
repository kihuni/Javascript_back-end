This example shows the mechanism of a promise. Ths `testpromise` method is called each time the button is clicked.

It creates a promise that will be fulfilled, using `setTimeout` method to the promise count(number starting from 1) every 1-3 seconds, at random. The `Promise()` constructor is used to create the promise

The fulfillment of the promise is logged, via a fulfill callback set using `p1.then()`. A few logs show how the synchronous part of the method is decoupled from the asynchronous completion of the promise.

By clicking the button several times in a short amount of time, you'll even see the different promises being fulfilled one after another.