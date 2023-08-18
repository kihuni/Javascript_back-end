const myFirstPromise = new Promise((resolve, reject) => {
    // Here we call resolve when asychronous process is successfull
    // and reject when it fails
    // Here we are using setTimeout to simulate async code
    setTimeout(() => {
        resolve("success!"); // Everything when well
    }, 250);
});
myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve
    // function above. it doesn't have to be a string,but
    // if it is only a succed message, it probably will be
    console.log(`${successMessage}`)
})